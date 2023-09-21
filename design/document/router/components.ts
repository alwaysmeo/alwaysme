'use strict'

import Layout from '../layout/Layout.vue'

export default [
	{
		path: '/components',
		name: 'Components',
		component: Layout,
		children: [
			{
				path: 'button',
				name: 'Button',
				component: () => import('@views/components/Button.vue')
			}
		]
	}
]
