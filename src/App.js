import React, { Suspense, Component } from "react";
import Header from "./components/header/header.component";
import ContentPage from "./containers/contentPages/content-pages.container";
import Footer from "./components/footer/footer.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import { auth } from "./firebase/firebase.util";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header currentUser={this.state.currentUser} />
            <ContentPage />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
