import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './screens/Home';
import Detail from './screens/Detail';
export default createDrawerNavigator(
  {
    Home,
    Detail,
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  },
);
