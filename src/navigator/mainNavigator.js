import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList80793Navigator from '../features/ArticleList80793/navigator';
import ArticleList80776Navigator from '../features/ArticleList80776/navigator';
import ArticleList80775Navigator from '../features/ArticleList80775/navigator';
import ArticleList80774Navigator from '../features/ArticleList80774/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList80793: { screen: ArticleList80793Navigator },
ArticleList80776: { screen: ArticleList80776Navigator },
ArticleList80775: { screen: ArticleList80775Navigator },
ArticleList80774: { screen: ArticleList80774Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
