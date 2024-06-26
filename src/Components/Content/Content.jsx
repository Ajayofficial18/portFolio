import styles from './Content.module.css'
import { TiArrowRightThick } from "react-icons/ti";

const Content = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.imgDiv}>
                <img src="public\images\logo1.jpg" alt="profile" />
            </div>
            <div className={styles.secondParent}>
                <h1>I'M AJAY GOUR.</h1>
                <span>FULL STACK DEVELOPER</span>
                <p>I’m Ajay Gour, a passionate and dedicated full-stack developer. I recently completed my Master of Computer Applications, where I honed my skills in programming languages such as Java, C++, C, and Python. My academic journey also led me to explore and master web development technologies, including HTML, CSS, and JavaScript, along with popular frameworks like React.js and Node.js.</p>
                <span className={styles.bttn}>
                    <button>MORE ABOUT ME </button>
                    <TiArrowRightThick className={styles.icon}/>
                </span>
            </div>
        </div>
    );
}

export default Content;
