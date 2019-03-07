import React from "react";
import { Spinner } from "../components/molecules";
import Tester from "../components/molecules/Tester";
import { Main } from "../components/pages";
import ThemeProvider from "../provider/Theme/ThemeProvider";
import { GlobalStyle } from "../styled/globalStyle";

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ThemeProvider>
        <Main />
        <Tester />
      </ThemeProvider>
      <GlobalStyle />
    </React.Suspense>
  );
};

export default App;
