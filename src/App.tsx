import Layout from "./components/Layout";
import RoutesPage from "./routes/RoutesPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  const cuy: string = "padik";
  return (
    <BrowserRouter>
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
