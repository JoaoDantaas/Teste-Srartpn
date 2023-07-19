import Router from "./routes";
import { GlobalStyle } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
