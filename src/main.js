import { createApp }	from 'vue'
import App				from './App.vue'
import router			from './router'
import store			from './store'
import mitt				from 'mitt';

import "./assets/styles/main.css";
import "highlight.js/styles/dracula.css"

const emitter	= mitt();
const app		= createApp( App );

app.config.globalProperties.emitter	= emitter;

app.use( store ).use( router ).mount( '#app' );
