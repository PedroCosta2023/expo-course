import { Container, ContainerTitle, Description, Title, WeatherContainer, WeatherDescription, WeatherImage, WeatherTitle, WeatherWrapper } from "./styles";
import CardImg from "../../../../assets/images/card.png"
import Moon from "../../../../assets/images/moon.png"

export default function Card() {
  return(
    <Container source={CardImg} imageStyle={{borderRadius:8}}>
        <ContainerTitle>
          <Title>Porto Alegre, RS</Title>
          <Description>Segunda-feira, 15 de maio de 2023</Description>
        </ContainerTitle>

        <WeatherWrapper>
          <WeatherContainer>
            <WeatherTitle>28ºc</WeatherTitle>
            <WeatherRange>26ºc / 32ºc</WeatherRange>
            <WeatherDescription>Poucas nuvens</WeatherDescription>
          </WeatherContainer>

          <WeatherImage source={Moon}/>

        </WeatherWrapper>
    </Container>
  )
}