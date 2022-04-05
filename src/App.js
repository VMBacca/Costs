// the "npm install json-server react-icons react-router-dom uuid" were installed inside "2-cost"
// "backend": "json-server --watch db.json --port 5000" was add at the package.json
// the "json-server" may be accessed by "2-cost> npm run backend"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import Contact from "./Components/Pages/Contact";
import NewProject from "./Components/Pages/NewProject";
import Container from "./Components/Layout/Container";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Projects from "./Components/Pages/Projects";
import Project from "./Components/Pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="company/*" element={<Company />} />
          <Route path="Projects/*" element={<Projects />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="newproject/*" element={<NewProject />} />
          <Route path="project/:id/*" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
