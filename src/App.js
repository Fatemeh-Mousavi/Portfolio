import "./App.css";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Servicses from "./component/services/Services";
import Blog from "./component/blog/Blog";
import Footer from "./component/footer/Footer";


function App(){
    return(
        <>
            <Header></Header>
            <About></About>
            <Servicses></Servicses>
            <Blog></Blog>
            <Footer></Footer>
        </>
)}

export default App;
