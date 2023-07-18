import React, { useRef, useState } from "react";

import { StyledLabel, WarningText } from "./styles";

interface FileInputProps {
  formData: FormProps;
  onFileChange: React.Dispatch<React.SetStateAction<FormProps>>;
  accept: "video/mp4" | ".pdf";
  label: string;
  errorText?: string;
}

interface FormProps {
  title: string;
  description: string;
  source: File | null;
}

const FileInput: React.FC<FileInputProps> = ({
  formData,
  onFileChange,
  accept,
  label,
  errorText
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleFileChangeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      onFileChange({ ...formData, source: selectedFile });
    }
  };

  const handleFileChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      onFileChange({ ...formData, file: selectedFile });
    }
  };

  const handleLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <div>
        <StyledLabel className="file-input-label" onClick={handleLabelClick}>
          {label}
        </StyledLabel>
        <span>{fileName}</span>
        <input
          type="file"
          ref={fileInputRef}
          accept={accept}
          onChange={accept === "video/mp4" ? handleFileChangeVideo : handleFileChangeFile}
          style={{ display: "none" }}
        />
      </div>
      {accept === "video/mp4" && (
        <>
          <WarningText>
            - Escolhe apenas vídeos no formato <span>mp4</span>;
          </WarningText>
          <WarningText>
            - Para melhor conservar o espaço no servidor, antes de submeteres o vídeo, entra neste
            <a href="google.com"> site </a> para tentar reduzir o tamanho do ficheiro.
          </WarningText>
          <WarningText>{errorText}</WarningText>
        </>
      )}
      {accept === ".pdf" && (
        <>
          <WarningText>
            - Escolhe apenas ficheiros no formato <span>PDF</span>;
          </WarningText>
          <WarningText>
            - Para melhor conservar o espaço no servidor, antes de submeteres o ficheiro, entra
            neste
            <a href="google.com"> site </a> para tentar reduzir o tamanho do ficheiro.
          </WarningText>
          <WarningText>{errorText}</WarningText>
        </>
      )}
    </div>
  );
};

export default FileInput;
