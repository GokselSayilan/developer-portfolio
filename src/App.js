import PortfolioApp from "./Components/PortfolioApp/PortfolioApp";

//context
import { ScreenProvider } from "./Context/ScreenContext";

function App() {
  return (
    <ScreenProvider>
      <PortfolioApp />
    </ScreenProvider>
  );
}

export default App;
