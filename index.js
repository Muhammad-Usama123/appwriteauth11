/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import {name as appName} from './app.json';
import { router } from './src/routes/Router';

AppRegistry.registerComponent(appName, () => router);
