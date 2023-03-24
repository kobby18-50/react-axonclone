import { useEffect, useState } from "react";
import { BiVerticalTop } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton = () => {

    const [backToTop, setbackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setbackToTop(true)
            }
            else{
                setbackToTop(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
    return ( 

        

<div>
    {backToTop && (
        <button
        style={{
            position : 'fixed',
            bottom : '50px',
            right : '50px',
            height : '30px',
            width : '30px',
            fontSize : '30px'
        }}
        onClick={scrollUp}

        className="bg-primary text-white  transition duration-300 rounded-lg hover:bg-secondary hover:text-primary"
        >
            <AiOutlineArrowUp/>
        </button>
    )}
</div>
     );
}
 
export default BackToTopButton;