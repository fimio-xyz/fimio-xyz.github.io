import React from 'react'
import { FooterContainer, Copyright } from './FooterElements'
import FooterButton from './FooterButton';

const FooterSection = () => {
	return (
		<>
			<FooterContainer>
				<FooterButton/>
				<Copyright>© 2022 Fimio, Inc.</Copyright>
			</FooterContainer>
		</>
	)
}


export default FooterSection