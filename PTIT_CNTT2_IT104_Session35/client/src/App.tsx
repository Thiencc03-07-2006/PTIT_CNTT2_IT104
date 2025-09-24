import Counter from "./features/counter/Counter";
import Random from "./features/random/Random";
import DarkMode from "./features/darkMode/DarkMode";
import Display from "./features/displayMode/Display";
import Menu from "./features/menu/Menu";
import Language from "./features/language/Language";
import ListFavorites from "./features/listFavorites/ListFavorites";
function App() {
  return (
    <>
      <Counter />
      <Random />
      <DarkMode />
      <Display />
      <Menu />
      <Language />
      <ListFavorites />
    </>
  );
}

export default App;
