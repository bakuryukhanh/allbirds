import "App.less";
import Cart from "components/cart";
import NavBar from "components/nav-bar";
import PageLoading from "components/pageLoading";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
            <ProductPage></ProductPage>
          </Suspense>
        </Route>
        <Route path="/collections/:slug">
          <Suspense fallback={<PageLoading />}>
            <CollectionPage></CollectionPage>
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
