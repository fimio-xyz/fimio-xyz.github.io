import React from 'react'
import { useNavigate  } from 'react-router';
import {
	TextWrapper, Title,
	FirstSubtitle, SecondSubtitle } from './CareerCellElements';

const CareerCell = ({background_image_id,
						text_wrapper_id,
						job_id, title,
						first_subtitle,
						second_subtitle,
						light_background,
						about, youWill, youHave, evenBetter, tech, howToApply}) => {
	const navigate = useNavigate()

	function goToPage(job_id) {
		navigate("jobs/" + job_id )
	}

	return (
		<TextWrapper id={text_wrapper_id} onClick={() => goToPage(job_id)} light_background={light_background}>
			<Title id={background_image_id}>{title}</Title>
			<FirstSubtitle>{first_subtitle}</FirstSubtitle>
			<SecondSubtitle>{second_subtitle}</SecondSubtitle>
		</TextWrapper>
	)
}

export default CareerCell

