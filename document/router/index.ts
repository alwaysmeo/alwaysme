'use strict'

import { createRouter, createWebHistory } from 'vue-router'
import Middleware from '../middleware'
import componentsRouter from './components'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: () => import('@views/Home.vue'),
			meta: {
				title: 'Home'
			}
		},
		...componentsRouter,
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			component: () => import('@views/NotFound.vue'),
			meta: {
				title: 'Not Found'
			}
		}
	]
})

Middleware(router)

export default router
