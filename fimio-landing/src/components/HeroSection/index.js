import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import desktopHeroLine1URL from '../../images/Transparent Logo.svg'
import {ButtonWrap} from '../ButtonWrap'
import {BsArrowDownCircle} from 'react-icons/bs'
import { HeroContainer, TextWrapper,
	Paragraph, ImgDownArrow,
	HeroHeader, BackgroundImage,
	BottomText, BlackoutImageTop, BlackoutImageBottom,
	SubWrapper } from './HeroElements'

const HeroSection = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (window.matchMedia("(max-width: 800px)").matches) {
			setIsDesktop(false);
		} else {
			setIsDesktop(true);
		}
	}, []);

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1))
			if (elem) {
				const yOffset = -80;
				const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({top: y, behavior: 'smooth'});
			}
		} else {
			window.scrollTo({top:0,left:0, behavior: "smooth"})
		}
	}, [location,]);

	var directTo = "careers";
	return (
		<HeroContainer id="home">
			<BackgroundImage>
				<TextWrapper>
					<BlackoutImageTop src={desktopHeroLine1URL}/>
					<BottomText className="bottom--coming-soon">Coming soon</BottomText>
				</TextWrapper>
			</BackgroundImage>
			<ButtonWrap
				to={ directTo }
				smooth={ true }
				duration={ 500 }
				spy={ true }
				exact="true"
				offset={ -80 }>
				<BsArrowDownCircle alt="Scroll Down"/>
			</ButtonWrap>
		</HeroContainer>

	)
}

export default HeroSection;