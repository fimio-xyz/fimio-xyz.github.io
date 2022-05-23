import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import mobileHeroLine1URL from '../../images/line1_heading_m.svg'
import desktopHeroLine1URL from '../../images/line1_heading.svg'
import mobileHeroLine2URL from '../../images/line2_heading_m.svg'
import desktopHeroLine2URL from '../../images/line2_heading.svg'
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
					<BlackoutImageTop className="show-sm" src={mobileHeroLine1URL}/>
					<BlackoutImageBottom className="show-sm" src={mobileHeroLine2URL}/>
					<BlackoutImageTop className="hidden-sm" src={desktopHeroLine1URL}/>
					<BlackoutImageBottom className="hidden-sm" src={desktopHeroLine2URL}/>
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