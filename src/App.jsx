import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { backgroundColor, textColor } from "./style/common";
import { AnimatePresence } from "framer-motion";
import RoutesWithAnimation from "./components/RoutesWithAnimation";

const GlobalStyles = createGlobalStyle`
${reset};

*{
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body{
  ${backgroundColor}
  ${textColor}
}
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <GlobalStyles></GlobalStyles>
        <BrowserRouter>
          <RoutesWithAnimation></RoutesWithAnimation>
        </BrowserRouter>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
