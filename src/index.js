import {StackNavigator} from "react-navigation"
import DrawerStack from './stacks/drawerStacks'
const Navigator=StackNavigator({
 drawerStack:{screen:DrawerStack}
 
},{
  headerMode:"none",
  initialRouteNAme:"drawerStack"
})