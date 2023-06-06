import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <div className='main-title'>
                <h1>Schmy Space</h1>
            </div>
            <div className="navbar-elements">
                <ul>
                    <li><NavLink to="/" className='navLink'>Home |</NavLink></li>
                    <li><NavLink to='/users' className='navLink'>Profile |</NavLink></li>
                    <li><NavLink to='/messages'>Messages |</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar