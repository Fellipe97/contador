import { useNavigate } from "react-router-dom";
import {
  Container,
  ErrorIcon,
  TitleText,
  MessageText,
  ButtonHome,
} from "./styles";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <ErrorIcon />
      <TitleText>404 - Página Não Encontrada</TitleText>
      <MessageText>
        Desculpe, a página que você está tentando acessar não existe.
      </MessageText>
      <ButtonHome onClick={() => navigate("/")}>Voltar para Home</ButtonHome>
    </Container>
  );
}

export default NotFound;
