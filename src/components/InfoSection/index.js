import React from 'react'
import { InfoContainer,InfoWrapper,InfoRow,Column1,
Column2,TextWrapper,TopLine,Heading,SubTittle,
BtnWrap, ImgWrap,Img } from './InfoElement'
import {Button} from '../ButtonElement';


const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,img,alt,buttonLabel,primary,dark,dark2,link}) => {
	return (
		<>
		<InfoContainer id={id} lightBg={lightBg}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column1>
					<TextWrapper>
						<TopLine>{topLine}</TopLine>
						<Heading lightText={lightText}>{headline}</Heading>
						<SubTittle darkText={darkText}>{description}</SubTittle>
						<BtnWrap>
							<Button  to={link}
								primary={primary ? 'true' : ''}
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								dark={dark}
							>
								{buttonLabel}</Button>
						</BtnWrap>
					</TextWrapper>
					</Column1>
					<Column2>
					<ImgWrap>
					<Img src={img} alt={alt}/>
					</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>	
		</>
	)
}

export default InfoSection
