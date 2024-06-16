import styles from './Header.module.css';
import { MdOutlineLightMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { PiToolboxFill } from "react-icons/pi";
import { IoMailUnread } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";

const Header = () => {
    return (
        <div className={styles.sidebar}>
            <button className={styles.bttn}>
                <MdOutlineLightMode className={styles.theme}/> 
            </button>
            <ul className={styles.elements}>
                <li><a href=""><FaHome className={styles.icon}/></a></li>
                <li><a href=""><MdAccountCircle className={styles.icon}/></a></li>
                <li><a href=""><PiToolboxFill className={styles.icon}/></a></li>
                <li><a href=""><IoMailUnread className={styles.icon}/></a></li>
                <li><a href=""><FaBlog className={styles.icon}/></a></li>
            </ul>
        </div>
    );
}

export default Header;

