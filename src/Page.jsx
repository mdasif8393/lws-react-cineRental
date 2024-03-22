import { useContext } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Page() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
