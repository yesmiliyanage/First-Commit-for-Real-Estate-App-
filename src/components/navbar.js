import "./style.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <CustomLink to="/favourites"><FontAwesomeIcon icon={faHeart} className="heart-icon"/></CustomLink>
                <CustomLink to="/about">About us</CustomLink>
                <CustomLink to="/contact">Contact us</CustomLink>
            </ul>

            <Link to="/home" className="site-name">ARIA REALTY</Link>

            <ul>
                <CustomLink to="/">Home</CustomLink>
                <Dropdown label="Properties">
                    <ul className="dropdown-menu">
                        <DropdownOption to="/properties/house">
                            <div className="dropdown-option-div">Houses</div>
                        </DropdownOption>
                        <DropdownOption to="/properties/flat">
                            <div className="dropdown-option-div">Flats</div>
                        </DropdownOption>
                        <DropdownOption to="/properties/apartment">
                            <div className="dropdown-option-div">Apartments</div>
                        </DropdownOption>
                    
                    </ul>
                </Dropdown>
                <CustomLink to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/></CustomLink>
            </ul>
        </nav>
    ) 
}

function CustomLink({to, children}){
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

function Dropdown({to, label, children}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end:false});
    const [open, setOpen] = useState(false);

    return(
        //to open the drop down when clicking a nav link and to close to by clicking on the nav link itself or elsewhere
        <li 
        className = {open ? "active" : ""} 
        onClick={() => setOpen(!open)} 
        > 
        <Link>
        <span className="dropdown-label">{label}</span>
        </Link>
            
        {open && children}
        </li>
    );
}

function DropdownOption({to, children}){
    return (
        <li>
            <Link to={to} className="dropdown-option">{children}</Link>
        </li>
    )
    
}