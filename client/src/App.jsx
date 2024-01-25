import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app trainsition-allease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
