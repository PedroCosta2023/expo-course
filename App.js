<<<<<<< HEAD
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
=======
import Search from "./src/type-weather/pages/search";

export default function App() {
  return <Search />;
>>>>>>> 866dd697ecda1cf6f3a134a371cc73ee43c89ef9
}
