import Typewriter from 'typewriter-effect';

const Type =()=>{
    return (
        <Typewriter
        options = {{
            strings: [
                "Full Stack Developer",
                "Deep Learning Engineer",
                "Cyber Secuirity Engineer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }
        }
        />
    )
}
 export default Type;

