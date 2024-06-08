import { View } from "react-native";
import Card from "./src/type-weather/pages/dash/components/card";
import Search from "./src/type-weather/pages/search";
import WeatherDetail from "./src/type-weather/pages/dash/components/weather-detail";

export default function App() {

  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center", height: 500, backgroundColor:"Black"}}>
      <WeatherDetail/>
    </View> 
    
  )
}
