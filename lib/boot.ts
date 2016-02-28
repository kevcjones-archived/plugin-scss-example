// Import dependencies
import 'angular2/bundles/angular2-polyfills';

import 'jquery'
import 'bootstrap-sass';


import injectCSS from './injectcss'

import styles from 'bootstrap-sass/assets/stylesheets/_bootstrap.scss!';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from '../app/app.component';


injectCSS(styles);
// Start the application
bootstrap(AppComponent);
