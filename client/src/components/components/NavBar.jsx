import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <div className='main-title'>
                <h1>Schmy Space</h1>
            </div>
            <div className="navbar-elements">
                <ul>
                    <li><NavLink exact to="/" className='navLink'>Home</NavLink></li>
                    <li><NavLink></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar