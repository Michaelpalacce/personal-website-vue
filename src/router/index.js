import { createRouter, createWebHistory }	from 'vue-router'
import Home									from '@/views/Home/Home.vue'
import Projects								from '@/views/Projects/Projects.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects
	},
	{
		path: '/about',
		name: 'about',
		component: Home
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Home
	},
]

const router	= createRouter({
	history: createWebHistory( process.env.BASE_URL ),
	routes
});

export default router
