import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { GrAdd } from "react-icons/gr";
import { Nav,
	NavbarContainer,
	NavLogoWrap,
	MobileIcon, NavLinkContainer, NavHamburger, NavItem } from './NavbarElements'
import NavbarButton from './NavbarButton'
import NavbarBlogButton from './NavbarBlogButton'

const Navbar = ({ isOpen, toggle }) => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [shouldShowIcon, setShouldShowIcon] = useState(false);
	const navigate = useNavigate();

	var careersButton;

	function goToCareersPage() {
		navigate("/#careers");
	}

	function goToHomePage() {
		navigate("/");
	}

	useEffect(() => {
		if (window.matchMedia("(max-width: 600px)").matches) {
			setIsDesktop(false);
		} else {
			setIsDesktop(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () =>
			window.removeEventListener("scroll", listenToScroll);
	}, [])

	const getOffset = (element) => {
		const rect = element?.getBoundingClientRect();
		const scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
		return rect?.top + scrollTop;
	};

	const listenToScroll = () => {
		const heightToHideFrom = getOffset(document.getElementById("careers"));
		const winScroll = document.body.scrollTop ||
			document.documentElement.scrollTop;

		if (winScroll >= heightToHideFrom - 100) {
			setShouldShowIcon(true);
		} else {
			setShouldShowIcon(true);
		}
	};

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogoWrap onClick={() => goToHomePage()}>
						{/*<MobileIcon src={SmallLogoImage} alt="Fimio Logo" />*/}
					</NavLogoWrap>
					<NavLinkContainer>
						<NavItem onClick={() => goToCareersPage()}>Careers</NavItem>
						<NavbarBlogButton />
						<NavbarButton />
					</NavLinkContainer>
					<NavHamburger isOpen={isOpen} onClick={toggle}>
						<GrAdd/>
					</NavHamburger>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar