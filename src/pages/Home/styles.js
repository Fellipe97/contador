import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const TitleContent = styled.div`
  text-align: center;
`;

export const GreetingText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #800080, #da70d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 5px rgba(128, 0, 128, 0.8);
  font-family: "Poppins", sans-serif;
`;

export const WelcomeText = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  background: linear-gradient(90deg, #800080, #dda0dd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 3px rgba(148, 0, 211, 0.5);
  font-family: "Roboto", sans-serif;
`;

export const MenuContent = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  overflow: visible;
`;

export const CountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(128, 0, 128, 0.8);
  gap: 15px;
  width: fit-content;
`;

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ButtonCount = styled.button`
  background: linear-gradient(90deg, #6a0dad, #800080);
  color: white;
  font-size: 1.5rem;
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

  &:disabled {
    background: gray;
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.7;
  }
`;

export const ButtonReset = styled.button`
  background: linear-gradient(90deg, #ff4500, #ff6347);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 69, 0, 0.5);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.02);
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.7;
  }
`;

export const LedCount = styled.div`
  font-size: 2.5rem;
  font-family: "Digital-7", sans-serif;
  color: #9400d3;
  text-shadow: 0 0 20px rgba(148, 0, 211, 1), 0 0 30px rgba(128, 0, 128, 0.8);
  background: #000;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(148, 0, 211, 0.8),
    0 0 30px rgba(128, 0, 128, 0.5);
`;
