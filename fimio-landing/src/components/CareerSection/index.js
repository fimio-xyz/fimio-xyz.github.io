import React, { useLayoutEffect, useEffect } from 'react'
import {BsArrowUpCircle} from 'react-icons/bs'
import { ButtonWrap } from '../ButtonWrap'
import { CareerContainer, InfoWrapper,
	Header, ImgUpArrow,
	BackgroundImage, BackgroundImageBehindGrid } from './CareerElements';
import CareerCell from './CareerCell';
import { job1, job2, job3 } from '../../Data';

const CareerSection = () => {
	const numJobs = 3;
	const [dimensions, setDimensions] = React.useState({
		height: null,
		width: null
	})

	useEffect(() => {
		function handleResize() {
			let elem = document.getElementById("text_wrapper_2").getBoundingClientRect()
			const width = elem.width + 20;
			const height = elem.height;
			setDimensions({ height: height, width: width })
			for (let index = 0; index < numJobs; index++) {
				let gridName = index + 1
				let backgroundElem = document.getElementById("grid" + gridName.toString());
				backgroundElem.style.width = width.toString() + 'px';
				backgroundElem.style.height = height.toString() + 'px';
			}
		}
		window.addEventListener('resize', handleResize)
	}, []);

	useLayoutEffect(() => {
		let elem = document.getElementById("text_wrapper_2").getBoundingClientRect()
		const width = elem.width + 20;
		const height = elem.height;
		setDimensions({ height: height, width: width })
		for (let index = 0; index < numJobs; index++) {
			let gridName = index + 1
			let backgroundElem = document.getElementById("grid" + gridName.toString());
			backgroundElem.style.width = width.toString() + 'px';
			backgroundElem.style.height = height.toString() + 'px';
		}
	}, []);

	return (
		<>
			<CareerContainer id="careers">
				<BackgroundImage>
					<InfoWrapper>
						<Header>Careers</Header>
						<BackgroundImageBehindGrid id="grid1" light_background={false}/>
						<CareerCell {...job1} />

						<BackgroundImageBehindGrid id="grid2" light_background={true}/>
						<CareerCell {...job2} />

						<BackgroundImageBehindGrid id="grid3" light_background={false}/>
						<CareerCell {...job3} />
					</InfoWrapper>
				</BackgroundImage>
				<ButtonWrap
					to="home"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={-80}>
					<BsArrowUpCircle alt="Scroll Up" />
				</ButtonWrap>
			</CareerContainer>
		</>
	)
}

export default CareerSection