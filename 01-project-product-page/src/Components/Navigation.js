
import './Navigation.css'


const Navigation = ()=>{

return(
    <div>
        <nav className='Nav'>
            <div className='logo'>
                <img src = "/images/brand_logo.png" cltname=""></img>
            </div>
            <ul className='menu'>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>
            <button className='button'>login</button>
        </nav>
    </div>
    )
}

export default Navigation;