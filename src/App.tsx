import Layout from "./components/Layout";
import RoutesPage from "./routes/RoutesPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AuthRoutes from "./routes/AuthRoutes";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutesPage />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
