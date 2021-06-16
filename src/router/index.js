import { createRouter, createWebHistory }	from 'vue-router'
import Home									from '@/views/Home/Home'
import Projects								from '@/views/Projects/Projects'
import Readme								from "@/views/Readme/Readme";
import Login								from "@/views/Login/Login";

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
		path: '/readme',
		name: 'readme',
		component: Readme
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
]

const router	= createRouter({
	history			: createWebHistory( process.env.BASE_URL ),
	scrollBehavior	: function( to, from, savedPosition )
	{
		if ( to.hash )
			return { el: to.hash, behavior: 'smooth' }
		else
			return { x: 0, y: 0 }
	},
	routes
});

export default router
