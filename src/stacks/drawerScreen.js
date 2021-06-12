import {DrawerNavigator} from 'react-navigation'

import Screen1 from '../components/screen1'
import DrawerNavigation from './drawerStacks'
const DrawerScreen=DrawerNavigation({
    Screen1:{screen:Screen1},
},{
    headerMode:'none',


})
export default DrawerScreen;