import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentPage from "./components/CurrentPage";
import Navigation from "./components/Navigation";

function App() {
  const [currentPageState, setPage] = useState(
    'AboutMe'
  )
  return (
    <div>
    <Header />
    <Navigation setPage={setPage} currentPageState={currentPageState} />
    <CurrentPage currentPageState={currentPageState} />
    <Footer />
    </div>
  );
}

export default App;
