import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./routes/Home";
import "./App.css";
import Detail from "./routes/Detail";

const GlobalStyles = createGlobalStyle`
${reset};

*{
  box-sizing: border-box;
}

body{
  background-color: #0d0618;
  color:#fff;
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
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/detail" element={<Detail></Detail>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
