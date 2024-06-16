import styles from './Content.module.css'
import { TiArrowRightThick } from "react-icons/ti";

const Content = () => {
    return (
        <div className={styles.parent}>
            <h1>- I'M AJAY GOUR.</h1>
            <span>FULL STACK DEVELOPER</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi a veniam, rerum adipisci eveniet autem quasi laborum tempore quaerat maiores dolores accusamus possimus quibusdam debitis! Vitae provident velit officiis quae.</p>
            <button>MORE ABOUT ME<TiArrowRightThick /></button>
        </div>
    );
}

export default Content;
