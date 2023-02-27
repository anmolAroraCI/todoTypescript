import "./App.css";
import AppRoutes from "./appRoutes/AppRoutes";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
