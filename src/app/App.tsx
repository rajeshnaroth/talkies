import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Spinner } from "../components/molecules";
import Navigation from "../components/organisms/Navigation";
import { Main, Movies } from "../components/pages";
import ThemeProvider from "../provider/Theme/ThemeProvider";
import { GlobalStyle } from "../styled/globalStyle";

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ThemeProvider>
        <Router>
          <div>
            <Navigation />
            <Route path="/" exact={true} component={Main} />
            <Route path="/test" component={Movies} />
          </div>
        </Router>
      </ThemeProvider>
      <GlobalStyle />
    </React.Suspense>
  );
};

export default App;
