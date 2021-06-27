import { createRouter, createWebHistory }	from 'vue-router'
import Home									from '@/views/Home/Home'
import Projects								from '@/views/Projects/Projects'
import Readme								from "@/views/Readme/Readme";
import Login								from "@/views/Login/Login";
import Admin								from "@/views/Admin/Admin";
import Blog									from "@/views/Blog/Blog";

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
	{
		path: '/blog',
		name: 'blog',
		component: Blog
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin
	}
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
