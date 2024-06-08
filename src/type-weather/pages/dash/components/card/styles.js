import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
  width: 359px;
  height: 328px;
  background-color: #16161f;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.ImageBackground`
  width: 335px;
  height: 304px;
`

export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`

export const Description = styled.Text`
  font-size: 12px;
  font-weight: 600;

`

export const WeatherContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-bottom: 16px;
`

export const WeatherTitle = styled.Text`
  font-size: 48px;
  font-weight: 800;
`

export const WeatherRange = styled.Text`
  font-size: 16px;
  font-weight: 700;
`

export const WeatherDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
`

export const WeatherWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const WeatherImage = styled.Image`
  width: 160px;
  height: 160px;
`
