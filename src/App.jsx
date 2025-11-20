import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";

const App = () => (
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);

export default App;
