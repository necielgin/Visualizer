import React from 'react'
import video from '../../video/video.mp4'
import { HeroBg,HeroContainer,VideoBg,HeroH1,HeroP,HeroContent } from './HeroElements'


const HeroSection = () => {
return (
	<HeroContainer id="home">
		<HeroBg>
			<VideoBg>	
				<video autoPlay loop muted src={video} type="video/mp4"/>
			</VideoBg>
		</HeroBg>
		<HeroContent>
			<HeroH1>Algorithm Visualizer</HeroH1>
			<HeroP>Algo- Visualizer is a tool that was created to help people learn different types of sorting and pathfinder algorithms</HeroP>
		</HeroContent>
	</HeroContainer>
	
)
}

export default HeroSection
