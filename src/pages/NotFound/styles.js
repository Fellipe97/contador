import styled from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: white;
  gap: 20px;
  text-align: center;
`;

export const ErrorIcon = styled(ErrorOutlineIcon)`
  font-size: 80px !important;
  color: #f44336;
`;

export const TitleText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #800080, #da70d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 5px rgba(128, 0, 128, 0.8);
  font-family: "Poppins", sans-serif;
`;

export const MessageText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
`;

export const ButtonHome = styled.button`
  background: linear-gradient(90deg, #6a0dad, #800080);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(128, 0, 128, 0.5);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`;
