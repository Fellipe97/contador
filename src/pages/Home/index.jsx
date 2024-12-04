import { useState } from "react";
import {
  Container,
  TitleContent,
  MenuContent,
  GreetingText,
  WelcomeText,
  CountBox,
  ButtonCount,
  ButtonReset,
  LedCount,
  ButtonsRow,
} from "./styles";

function Home() {
  const [count, setCount] = useState(0);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Olá, bom dia!";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Olá, boa tarde!";
    } else {
      return "Olá, boa noite!";
    }
  };

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <Container>
      <TitleContent>
        <GreetingText>{getGreeting()}</GreetingText>
        <WelcomeText>Seja bem-vindo(a)!</WelcomeText>
      </TitleContent>

      <MenuContent>
        <CountBox>
          <ButtonsRow>
            <ButtonCount onClick={decrement} disabled={count === 0}>
              -
            </ButtonCount>
            <LedCount>{count.toString().padStart(2, "0")}</LedCount>
            <ButtonCount onClick={increment}>+</ButtonCount>
          </ButtonsRow>
          <ButtonReset onClick={reset} disabled={count === 0}>
            Reset
          </ButtonReset>
        </CountBox>
      </MenuContent>
    </Container>
  );
}

export default Home;
