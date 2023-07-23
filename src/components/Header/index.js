import {Link} from 'react-router-dom'

import {NavContainer,NavMainContainer,NavLogoContainer,NavLogo,NavHead,NavListContainer,NavItem} from './styled'


const Header = ()=>(

    <NavMainContainer>
        <NavContainer>
            <NavLogoContainer>
            <NavLogo src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="wave"/>
            <NavHead>Wave</NavHead>
            </NavLogoContainer>
           <NavListContainer>
            <Link to="/"><NavItem>Home</NavItem></Link>
            <Link to="/about"> <NavItem>About</NavItem></Link>
            <Link to="/contact"> <NavItem>Contact</NavItem></Link>
           </NavListContainer>
        </NavContainer>

    </NavMainContainer>
)

export default Header