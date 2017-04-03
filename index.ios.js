// Renders component to the device. Only the root component needs to be registered
import { AppRegistry } from 'react-native';
import App from './lib/app';

AppRegistry.registerComponent('ourMap', () => App);
