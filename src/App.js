import React, { Suspense } from "react";
import HeaderContainer from "./containers/header/header.container";
import RoutesContainer from "./containers/routes/routes.container";
import Footer from "./components/footer/footer.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <HeaderContainer />
          <RoutesContainer />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
