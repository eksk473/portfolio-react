import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Router } from "./Router";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export { App };
