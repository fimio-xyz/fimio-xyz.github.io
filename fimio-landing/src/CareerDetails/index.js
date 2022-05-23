import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { BackIcon,
	Container,
	ContentWrapper,
	Title, FirstSubtitle,
	SecondSubtitle, Header,
	Paragraph, ParagraphList,
	SubtitleWrapper, JobLink } from './CareerDetailsElements'

import Navbar from '../components/Navbar'
import BackButton from '../images/down-rounded-arrow.svg'
import { FooterContainer, Copyright } from '../components/FooterSection/FooterElements'
import FooterButtonTwitter  from '../components/FooterSection'
import Sidebar from '../components/Sidebar';


function CareerDetailsPage({isOpen, toggle, job_id, title, first_subtitle, second_subtitle, light_background, about, youWill, youHave, evenBetter, tech, howToApply}) {
	const navigate = useNavigate()
	let email = "founders@tiptop.xyz";

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
					<BackIcon src={BackButton} onClick={() => goToPage()} />
					<Title>{title}</Title>
					<SubtitleWrapper>
						<FirstSubtitle>{first_subtitle}</FirstSubtitle>
						<SecondSubtitle>{second_subtitle}</SecondSubtitle>
					</SubtitleWrapper>
					<Paragraph>{about}</Paragraph>
					<Header>You Will</Header>
					<ParagraphList>{youWill}</ParagraphList>
					<Header>You Have</Header>
					<ParagraphList>{youHave}</ParagraphList>
					<Header>Even Better</Header>
					<ParagraphList>{evenBetter}</ParagraphList>
					{techUse}
					<Header>How To Apply</Header>
					<Paragraph>{howToApply}</Paragraph>
					<JobLink href={`mailto:${email}?subject=${encodeURIComponent(title) || ''}`}>founders@tiptop.xyz</JobLink>
				</ContentWrapper>
				<FooterContainer>
					<FooterButtonTwitter/>
				</FooterContainer>
			</Container>
		</>
	)
}

export default CareerDetailsPage