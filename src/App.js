import logo from './logo.svg';
import './App.css';
import { StyleSheet,Text,View,Dimensions,ScrollView } from 'react-native';
import MapView, {Marker,ProviderPropType} from 'react-native-maps'
import React from 'react';
const {width,height}=Dimensions.get("window")
const ASPECT_RATIO= width/height
const LATITUDE=6.2257614;
const LONGITUDE=-75.5987337;
const LATITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO
const LONGITUDE_DELTA= 0.0922;

class mapa extends React.Component{
  constructor(props){
    super(props);
    this.state={
      latitude:LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta:LATITUDE_DELTA,
      longitudDelta=LONGITUDE_DELTA
    }
  }
  render(){
    return(
     < View style={styles.container}>
       <MapView 
       provider= {this.props.provider}
       style={styles.map}
       scrollEnabled={true}
       pitchEnabled={true}
       rotateEnabled={true}
       initialRegion={this.state.region}
       showsUserLocation={true}
       followsUserLocation={true}
       >
       </MapView>
     < Text > pos como que si funciona </Text>
     </View>

    );
  }
}
 mapa.propType={
   provider:ProviderPropType,
 }
const styles =StyleSheet.create({
  container:{
    flex:1,
background:"black",
    aligntems:"center",
    justifyContent:"center",
  },
  map:{
  height:"100%",
    width:"100%"
  }
})
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App,
export default mapa
