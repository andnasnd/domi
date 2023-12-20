import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default WrappedApp;
