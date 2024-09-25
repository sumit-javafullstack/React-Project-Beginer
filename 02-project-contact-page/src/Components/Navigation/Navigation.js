import styles from'./Navigation.module.css'

const Navigation = ()=>{

    return(
        <nav className={ `${styles.navigation} container` }>
            <img src='images/Frame21.png'></img>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;