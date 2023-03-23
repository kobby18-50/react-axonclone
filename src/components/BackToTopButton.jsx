import { useEffect, useState } from "react";
import { BiVerticalTop } from "react-icons/bi";

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
            height : '50px',
            width : '50px',
            fontSize : '50px'
        }}
        onClick={scrollUp}

        className="bg-white text-primary transition duration-300 rounded-full hover:bg-secondary hover:text-primary"
        >
            <BiVerticalTop/>
        </button>
    )}
</div>
     );
}
 
export default BackToTopButton;