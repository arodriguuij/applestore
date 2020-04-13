import React, { Suspense } from "react";
import Header from "./components/header/header.component";
import ContainerPage from "./containers/containerPage/container-page.container";
import Footer from "./components/footer/footer.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Header />
          <ContainerPage />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
