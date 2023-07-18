import { desktop } from "../../../styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  height: 420px;

  ${desktop} {
    width: 250px;
  }
`;

export const Container = styled.div<{ hasFile: boolean; base64Image?: string; error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 350px;
  border: 2px dotted
    ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.darkBlue)};
  border-radius: 8px;
  overflow: hidden;

  > img {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${({ hasFile }) =>
    hasFile &&
    `
    border-style: solid;
  `}

  ${desktop} {
    width: 250px;
  }
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AddButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #666;
`;

export const RemoveButton = styled.button`
  top: 8px;
  right: 8px;
  padding: 4px 22px;
  font-size: 14px;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;

  :hover {
    background-color: #af2d23;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.error};
  margin-left: 14px;
  text-align: left;
  margin-top: 3px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;
