
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    return(
        <header className={classes.header}>
            <h1>Redux - React dummy online store</h1>
            <nav>
                <ul>
                    <li>
                        <button></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;