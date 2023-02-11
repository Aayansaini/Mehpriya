// import { Navbar } from "../Navbar";
// import { Footer } from "../Footer/Footer";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { Slider1 } from "../Slider/Slider";
import { SliderII } from "../Slider/SliderII";
export function Home(){
    return(
        <>
        {/* <Navbar/> */}     
        <Slider1 />
        <SliderII/>    
        </>
    );
}