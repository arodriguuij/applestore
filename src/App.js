import React, { Suspense, Component } from "react";
import Header from "./components/header/header.component";
import ContentPage from "./containers/contentPages/content-pages.container";
import Footer from "./components/footer/footer.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state.currentUser)
        });
      } else this.setState({ currentUser: userAuth });
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
