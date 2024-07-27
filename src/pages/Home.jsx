import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HilightText from "../components/Hilighttext";
import CTAButton from "../components/CTAButton";
import UploadPicture from "../components/UploadPicture";
import IconBtn from "../components/IconBtn";
const Home= ()=> {
  const handleGetAllImages = ()=>{

  }
    return (
        
        <div className="relative mx-auto flex max-w-maxContent flex-col w-11/12 items-center justify-between text-white">
            
             <div className="text-center font-semibold text-4xl mt-7">
                Upload 
                <HilightText text={"Images"}/> <div>
           
                <UploadPicture></UploadPicture>
             </div>
             
            
            
  
        </div>
        
      </div>
    );
}
export default Home;
