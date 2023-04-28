import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import { useState } from "react";
import Log from "./pages/log";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
          <Route path="/log" element={<Log />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
