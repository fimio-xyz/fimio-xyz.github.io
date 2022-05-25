import React, { useLayoutEffect, useEffect } from 'react'
import {BsArrowUpCircle} from 'react-icons/bs'
import { ButtonWrap } from '../ButtonWrap'
import { CareerContainer, InfoWrapper,
	Header, ImgUpArrow,
	BackgroundImage, BackgroundImageBehindGrid } from './CareerElements';
import CareerCell from './CareerCell';
import { jobs } from '../../Data';

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

	return (
		<>
			<CareerContainer id="careers">
				<BackgroundImage>
					<InfoWrapper>
						<Header>Careers</Header>
						{
							jobs.map(job => (<div key={job.job_id}>
									<BackgroundImageBehindGrid id={`grid${job.job_id}`}
															   light_background={parseInt(job.job_id) % 2 === 1}/>
									<CareerCell {...job} />
								</div>)
							)
						}
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