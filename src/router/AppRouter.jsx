import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home, About, Projects, Skills, Contact } from "../pages";
import Resume from "../pages/Resume";

const AppRouter = () => (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>
);

export default AppRouter;