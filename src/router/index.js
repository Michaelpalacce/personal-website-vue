import { createRouter, createWebHistory }	from 'vue-router'
import Home									from '@/views/Home/Home'
import Projects								from '@/views/Projects/Projects'
import Readme								from "@/views/Readme/Readme";
import Terminal								from "@/views/Terminal/Terminal";
import Blogs								from "@/views/Blog/Blogs";
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
		path: '/terminal',
		name: 'terminal',
		component: Terminal
	},
	{
		path: '/blogs',
		name: 'blogs',
		component: Blogs
	},
	{
		path: '/blogs/:blogId',
		name: 'blog',
		component: Blog
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
