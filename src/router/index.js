import { createRouter, createWebHistory }	from 'vue-router'
import Home									from '@/views/Home/Home'
import Projects								from '@/views/Projects/Projects'
import Readme								from "@/views/Readme/Readme";
import Contacts								from "@/views/Contacts/Contacts";

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
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	},
]

const router	= createRouter({
	history: createWebHistory( process.env.BASE_URL ),
	routes
});

export default router
