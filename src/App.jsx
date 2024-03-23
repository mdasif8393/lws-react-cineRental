import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
        <ToastContainer />
      </ThemeContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;
