import React, { useState,useEffect } from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import ScrollspyNav from "./scrollSpy";
import logolight from "../../assets/images/Circular logo.png";
import logodark from "../../assets/images/Circular logo.png";
import '../../assets/css/Own.css';
import { useNavigate } from "react-router-dom";

const NavbarPage = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();


   

    const handlePortfolioItemClick = () => {
        window.scrollTo(0, 0);
        const portfolioPath = "/Ayatana"; // Update this with your desired path
        navigate(portfolioPath);
    };
    const handlePortfolioItemClicktwo = () => {
        window.scrollTo(0, 0);
        const portfolioPath = "/Isibisi"; // Update this with your desired path
        navigate(portfolioPath);
    };
    const handlePortfolioItemClickthree = () => {
        window.scrollTo(0, 0);
        const portfolioPath = "/StorefrontX"; // Update this with your desired path
        navigate(portfolioPath);
    };

    const toggle = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMouseEnter = () => {
        // Add any specific hover effect logic for the "Portfolio" item
        // For example, change background color or add a shadow
    };

    const handleMouseLeave = () => {
        // Add any specific logic when the mouse leaves the "Portfolio" item
    };

    

    let targetId = props.navItems.map((item) => item.idnm);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Update the activeNavItem based on the scroll position and target sections
        // You might need to adjust this logic based on your specific requirements
        const newActiveNavItem = calculateActiveNavItem(scrollPosition, targetId);
        setActiveNavItem(newActiveNavItem);
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [targetId]); // Re-run the effect when targetId changes

    const calculateActiveNavItem = (scrollPosition, targetIds) => {
        // Implement your logic to determine which section is currently visible based on scrollPosition and targetIds
        // For example, you can use the Intersection Observer API or other methods

        // Placeholder logic - replace with your actual implementation
        const threshold = 100; // Adjust the threshold as needed
        for (let i = 0; i < targetIds.length; i++) {
            const targetElement = document.getElementById(targetIds[i]);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    return targetIds[i];
                }
            }
        }

        return null;
    };


    return (
        <React.Fragment>
            <Navbar expand="lg" fixed="top" className={" " + props.navClass}>
                <Container>
                    <NavbarBrand className="logo text-uppercase" href="/">
                        {props.imglight === true ?
                            <img src={logolight} alt="" className="logo-lights" height="60" />
                            : <img src={logodark} alt="" className="logo-darks" height="60" />
                        }
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}><i className="mdi mdi-menu"></i></NavbarToggler>

                    <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                        <ScrollspyNav
                            scrollTargetIds={targetId}
                            scrollDuration="800"
                            headerBackground="true"
                            className="navbar-collapse"
                        >
                            <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                                {props.navItems.map((item, key) => (
                                    <NavItem
                                        key={key}
                                        onMouseEnter={item.idnm === "portfolio" ? handleMouseEnter : undefined}
                                        onMouseLeave={item.idnm === "portfolio" ? handleMouseLeave : undefined}
                                        
                                    >
                                        {item.idnm === "portfolio" ? (
                                            <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown}  style={{ color: "#03272E" ,backgroundColor: activeNavItem === item.idnm ? "aqua" : "transparent"}}  activeClassName="active-link"  onClick={() => setActiveNavItem(item.idnm)} >
                                                <DropdownToggle nav caret  style={{ color: "#03272E" ,backgroundColor: activeNavItem === item.idnm ? "aqua" : "transparent"}}  activeClassName="active-link"  onClick={() => setActiveNavItem(item.idnm)}   className={`dropdown-toggle ${dropdownOpen ? 'dropup' : ''}`} >
                                                    {item.navheading}
                                                </DropdownToggle>
                                                <DropdownMenu style={{backgroundColor:"#FFFFFF",border:"1px solid grey "}}>
                                                    <DropdownItem href="" style={{ color: "#000000" }} className="portfolio-item" onClick={handlePortfolioItemClicktwo}>Isibisi</DropdownItem>
                                                    <DropdownItem href="" style={{ color: "#000000",borderTop:"1px solid #E8E8E8" }} className="portfolio-item"  onClick={handlePortfolioItemClick} >Ayatana</DropdownItem>
                                                    <DropdownItem href="" style={{ color: "#000000" ,borderTop:"1px solid #E8E8E8"}} className="portfolio-item" onClick={handlePortfolioItemClickthree}>StorefrontX</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        ) : (
                                            <NavLink href={"#" + item.idnm} style={{ color: "#03272E" ,backgroundColor: activeNavItem === item.idnm ? "aqua" : "transparent"}}  activeClassName="active-link"  onClick={() => setActiveNavItem(item.idnm)} >
                                                {item.navheading}
                                            </NavLink>
                                        )}
                                    </NavItem>
                                ))}
                            </Nav>
                        </ScrollspyNav>
                    </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default NavbarPage;
