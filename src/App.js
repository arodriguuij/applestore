import React, { Suspense } from "react";
import Header from "./components/header/header.component";
import ContentPage from "./containers/contentPages/content-pages.container";
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
          <ContentPage />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
