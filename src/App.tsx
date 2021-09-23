import "App.less";
import Cart from "components/cart";
import NavBar from "components/nav-bar";
import PageLoading from "components/pageLoading";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "routes/auth/login";
import SignUpPage from "routes/auth/sign-up";
import CategoryPage from "routes/categories";
import UserPage from "routes/user";
import "./style/styles.scss";
const HomePage = React.lazy(() => import("routes/home"));
const ProductPage = React.lazy(() => import("routes/product"));
const CollectionPage = React.lazy(() => import("routes/collections"));

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Cart></Cart>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<PageLoading />}>
            <HomePage />
          </Suspense>
        </Route>
        <Route path="/products/:slug">
          <Suspense fallback={<PageLoading />}>
            <ProductPage />
          </Suspense>
        </Route>
        <Route path="/collections/:slug">
          <Suspense fallback={<PageLoading />}>
            <CollectionPage />
          </Suspense>
        </Route>
        <Route path="/categories/:slug">
          <Suspense fallback={<PageLoading />}>
            <CategoryPage />
          </Suspense>
        </Route>

        {/* <Route exact path="/categories/:slug">
          <CategoryTest />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/register">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
