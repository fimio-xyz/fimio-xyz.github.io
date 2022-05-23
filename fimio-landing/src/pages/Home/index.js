import React, { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar';
import Sidebar from "../../components/Sidebar";
import HeroSection from "../../components/HeroSection";

const Home = ({isOpen, toggle }) => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [shouldShowNavBar, setShouldShowNavBar] = useState(false);

	var navBar;

	useEffect(() => {
		if (window.matchMedia("(max-width: 800px)").matches) {
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
		const rect = element?.getBoundingClientRect()
		const scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
		return rect?.top + scrollTop;
	};

	const listenToScroll = () => {
		const heightToHideFrom = getOffset(document.getElementById("careers"));
		const winScroll = document.body.scrollTop ||
			document.documentElement.scrollTop;

		if (winScroll >= heightToHideFrom - 110) {
			setShouldShowNavBar(true);
		} else {
			setShouldShowNavBar(false);
		}
	};

	if (isDesktop) {
		navBar = <NavBar />;
	} else {
		if (shouldShowNavBar) {
			navBar = <NavBar />;
		} else {
			navBar = null;
		}
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<NavBar isOpen={isOpen} toggle={toggle} />
			<HeroSection/>
		</>
	);
};

export default Home;