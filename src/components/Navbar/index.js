import React,{useState, useEffect} from 'react'
import { Nav,NavbarCointaner,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks 
, NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'; 
import { animateScroll as scroll } from 'react-scroll'; 

const Navbar = ({toggle}) => {
	
	const [scrollNav, setScrollNav] = useState(false);

  const changeNav= () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
	scroll.scrollToTop();
      };
	return (
	 <>
	<IconContext.Provider value={{ color: '#fff' }}>
		<Nav scrollNav={scrollNav}>
			<NavbarCointaner>
				<NavLogo to="/" onClick={toggleHome}>
					Algo-Visualizer
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
				{[
                { to: 'about', title: 'About', }, 
                { to: 'sorting', title: 'Sorting', }, 
                { to: 'pathfinder', title: 'Pathfinder', }, 
              ].map(({ to, title }) => (
                <NavItem key={to}>
                  <NavLinks 
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {title}
		    </NavLinks>
                </NavItem>))}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/sorting">Get started</NavBtnLink>
				</NavBtn>
			</NavbarCointaner>
		</Nav>
		</IconContext.Provider>
	 </>
	)
}

export default Navbar;
