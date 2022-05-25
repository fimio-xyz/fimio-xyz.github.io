import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
	BackIcon,
	Container,
	ContentWrapper,
	Title, FirstSubtitle,
	SecondSubtitle, Header,
	Paragraph, ParagraphList,
	SubtitleWrapper, JobLink, Button
} from './CareerDetailsElements'

import Navbar from '../components/Navbar'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { FooterContainer, Copyright } from '../components/FooterSection/FooterElements'
import FooterButtonTwitter  from '../components/FooterSection'
import Sidebar from '../components/Sidebar';
import {ButtonWrap} from "../components/ButtonWrap";


function CareerDetailsPage({isOpen, toggle, job_id, title, first_subtitle,
							   second_subtitle, light_background, about, youWill,
							   youHave, evenBetter, tech, howToApply, applyForm}) {
	const navigate = useNavigate()
	let email = "founders@fimio.xyz";

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	function goToPage() {
		navigate("/#careers")
	}

	var techUse;
	if (tech) {
		techUse = <><Header>Tech You'll Use</Header>
			<ParagraphList>{tech}</ParagraphList></>
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<Container>
				<ContentWrapper>
					<ButtonWrap>
						<BsArrowLeftCircle onClick={() => goToPage()}/>
					</ButtonWrap>

					<Title>{title}</Title>
					<SubtitleWrapper>
						<FirstSubtitle>{first_subtitle}</FirstSubtitle>
						<SecondSubtitle>{second_subtitle}</SecondSubtitle>
					</SubtitleWrapper>
					<Paragraph>{about}</Paragraph>
					<Header>You Will</Header>
					<ParagraphList>{youWill}</ParagraphList>
					<Header>You may be a fit if you have</Header>
					<ParagraphList>{youHave}</ParagraphList>
					<Header>How To Apply</Header>
					<Paragraph>{howToApply}</Paragraph>
					<a href={applyForm} target='_blank'>
						<Button primary>Apply</Button>
					</a>
				</ContentWrapper>
				<FooterContainer>
					<FooterButtonTwitter/>
				</FooterContainer>
			</Container>
		</>
	)
}

export default CareerDetailsPage