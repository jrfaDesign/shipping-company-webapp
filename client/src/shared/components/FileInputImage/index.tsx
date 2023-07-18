import React, { useState } from "react";
import { ResultClass } from "~/types/app";

import { Wrapper, Container, AddButton, RemoveButton, HiddenInput, ErrorText } from "./styles";

interface FormProps {
  id: number | string;
  title: string;
  description: string;
  image: string;
  price: number | null;
  promo?: number | null;
  category: "ebooks";
}

interface Props {
  label: string;
  id: string;
  formData: any;
  onFileSelect: any;
  image?: string;
  error: boolean;
  errorText: string | undefined;
}

const FileInputImage = ({ label, id, formData, onFileSelect, image, error, errorText }: Props) => {
  const [base64Image, setBase64Image] = useState<string | undefined | null>(image);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
        onFileSelect({ ...formData, [id]: reader.result });
      };
    }
  };

  const handleRemoveFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBase64Image(null);
    onFileSelect({ ...formData, [id]: null });
  };

  return (
    <Wrapper>
      <Container error={error} hasFile={!!base64Image}>
        {image && <img src={base64Image as string} />}
        {!base64Image && (
          <>
            <AddButton htmlFor={id}>{label}</AddButton>
            <HiddenInput type="file" id={id} onChange={handleFileSelect} accept="image/*" />
          </>
        )}
      </Container>
      {base64Image && <RemoveButton onClick={handleRemoveFile}>Apagar</RemoveButton>}
      {error && <ErrorText>{errorText}</ErrorText>}
    </Wrapper>
  );
};

export default FileInputImage;
