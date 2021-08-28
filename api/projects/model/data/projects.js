module.exports	= [
	{
		title: 'EventRequest',
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i event_request',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			}
		],
		badges: [
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-12.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-12.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-14.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-14.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-15.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-15.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-16.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-16.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-12.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-12.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-14.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-14.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-15.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-15.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-16.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-16.x/badge.svg'
			},
			{
				link: 'https://www.codacy.com/manual/Michaelpalacce/EventRequest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Michaelpalacce/EventRequest&amp;utm_campaign=Badge_Coverage',
				badge: 'https://app.codacy.com/project/badge/Coverage/3c843dd2bc454f06b10eb60820dc6d1b'
			},
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/EventRequest.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/EventRequest.git'
			},
			{
				icon: '/resources/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/event_request'
			}
		],
		link: 'https://github.com/Michaelpalacce/EventRequest.git',
		text: 'EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.' +
			'<br/><br/>' +
			'It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!',
		images: [
			'/resources/imgs/EventRequest-1.svg',
			'/resources/imgs/EventRequest-2.png'
		]
	},
	{
		title: 'ServerEmulator',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: true,
				content: '/resources/imgs/technologies/vuejs-logo.svg',
				link: 'https://vuejs.org/'
			},
			{
				isImg: false,
				content: 'EventRequest',
				link: '#EventRequest'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/Server.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Server.git'
			},
			{
				icon: '/resources/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/server-emulator'
			}
		],
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i -g server-emulator',
		link: 'https://github.com/Michaelpalacce/Server.git',
		text: 'This npm module allows you to access your file system in the browser. Allows for a wide variety of operations ( copy, cut, paste, delete, download, etc. ). It also allows for video, text, image and audio streaming.' +
			'<br/><br/>' +
			'In the future more modules will be added to it. Intended as a personal cloud replacement.' +
			'<br/><br/>' +
			'It acts as a Command Line Interface ( CLI ) and can be booted from anywhere by installing it as a global module.',
		images: [
			'/resources/imgs/ServerEmulator-1.png'
		]
	},
	{
		title: 'FsBrowser',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: false,
				content: 'EventRequest',
				link: '#EventRequest'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/fs-browser.git'
			},
			{
				icon: '/resources/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/fs-browser'
			}
		],
		link: 'https://github.com/Michaelpalacce/fs-browser.git',
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i fs-browser',
		text: 'This npm module allows pagination of the file system. It fetches directories first and then files, allowing you to order the results in a more predictable fashion.' +
			'<br/><br/>' +
			'The module is entirely asynchronous and works in Linux and Windows systems.',
		images: [
			'/resources/imgs/fs-browser-1.svg',
			'/resources/imgs/fs-browser-2.svg',
			'/resources/imgs/fs-browser-3.svg'
		]
	},
	{
		title: 'Redis DataServer',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: false,
				content: 'EventRequest',
				link: '#EventRequest'
			}
		],
		badges: [
			{
				badge: 'https://travis-ci.com/Michaelpalacce/er_redis_data_server.svg?branch=master',
				link: 'https://travis-ci.com/Michaelpalacce/er_redis_data_server'
			},
			{
				badge: 'https://codecov.io/gh/Michaelpalacce/er_redis_data_server/branch/master/graph/badge.svg',
				link: 'https://codecov.io/gh/Michaelpalacce/er_redis_data_server'
			},
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			},
			{
				icon: '/resources/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/er_redis_data_server'
			}
		],
		link: 'https://github.com/Michaelpalacce/er_redis_data_server.git',
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i er_redis_data_server',
		text: 'er_redis_data_server is a plugin for EventRequest that adds the ability to attach a redis data server. This allows for distributed caching.',
		images: [
			'/resources/imgs/er_redis_data_server-1.svg'
		]
	},
	{
		title: 'Memcached DataServer',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: false,
				content: 'EventRequest',
				link: '#EventRequest'
			}
		],
		badges: [
			{
				badge: 'https://travis-ci.com/Michaelpalacce/er_memcached_data_server.svg?branch=master',
				link: 'https://travis-ci.com/Michaelpalacce/er_memcached_data_server'
			},
			{
				badge: 'https://codecov.io/gh/Michaelpalacce/er_memcached_data_server/branch/master/graph/badge.svg',
				link: 'https://codecov.io/gh/Michaelpalacce/er_memcached_data_server'
			},
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/er_memcached_data_server.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/er_memcached_data_server.git'
			},
			{
				icon: '/resources/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/er_memcached_data_server'
			}
		],
		link: 'https://github.com/Michaelpalacce/er_memcached_data_server.git',
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i er_memcached_data_server',
		text: 'er_memcached_data_server. is a plugin for EventRequest that adds the ability to attach a memcached data server. This allows for distributed caching.',
		images: [
			'/resources/imgs/er_memcached_data_server-1.svg'
		]
	},
	{
		title: 'Docker Cassandra',
		installCommand: 'docker pull stefangenov/cassandra:3.11',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/'
			}
		],
		badges: [],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Docker/tree/master/cassandra'
			},
			{
				icon: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/repository/docker/stefangenov/cassandra'
			},
		],
		link: 'https://github.com/Michaelpalacce/Docker.git',
		text: 'Cassandra installation with lucene index plugin.' +
			' Contains 2 ready probes that can be used to check if the node/seed is up and running.'
	},
	{
		title: 'Docker Jenkins Inbound Agent NodeJS',
		installCommand: 'docker pull stefangenov/jenkins-agent-node',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/'
			}
		],
		badges: [],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Docker/tree/master/jenkins'
			},
			{
				icon: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/repository/docker/stefangenov/jenkins-agent-node'
			},
		],
		link: 'https://github.com/Michaelpalacce/Docker.git',
		text: 'Jenkins Inbound Agent for AMD64 and ARM64 processors based on the'
			+ ' alpine linux with NodeJS 16.7, git and openssh installed. When you Run it in Kubernetes, make sure not to '
			+ 'pass any arguments and not to overwrite the command.'
	},
	{
		title: 'Docker PHP',
		installCommand: 'docker pull stefangenov/php:7.2',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/'
			}
		],
		badges: [],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Docker/tree/master/php/7.2'
			},
			{
				icon: '/resources/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/repository/docker/stefangenov/php'
			},
		],
		link: 'https://github.com/Michaelpalacce/Docker.git',
		text: 'A php7.2-fpm installation based on alpine linux.' +
			' Includes a bunch of configurable Environment Variables. ' +
			'Contains phpunit, composer, nodejs, cassandra php driver and git installed by default.'
	},
	{
		title: 'Ansible Role docker',
		installCommand: 'ansible-galaxy install michaelpalacce.docker',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-docker.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-docker.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/docker'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-docker.git',
		text: 'Ansible Role that installs Docker on Ubuntu machines.'
	},
	{
		title: 'Ansible Role docker-compose',
		installCommand: 'ansible-galaxy install michaelpalacce.docker-compose',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-docker-compose.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-docker-compose.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/docker_compose'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-docker-compose.git',
		text: 'Ansible Role that installs a specific user-defined version of docker-compose. This role also creates a symlink for you, ' +
			'so you can easily use docker-compose. You should install docker before installing docker-compose ( you could use <a href="#Ansible%20Role%20docker" class="text-blue-500">Ansible Docker role</a> )'
	},
	{
		title: 'Ansible Role helm',
		installCommand: 'ansible-galaxy install michaelpalacce.helm',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-helm.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-helm.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/helm'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-helm.git',
		text: 'Ansible Role that installs Helm, the kubernetes package manager on Ubuntu machines.'
	},
	{
		title: 'Ansible Role kubernetes_preflight',
		installCommand: 'ansible-galaxy install michaelpalacce.kubernetes_preflight',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/kubernetes_preflight'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git',
		text: 'Ansible Role that installs All the kubernetes binaries and does all preflight checks and configurations.'
	},
	{
		title: 'Ansible Role kubernetes_cluster',
		installCommand: 'ansible-galaxy install michaelpalacce.kubernetes_cluster',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/kubernetes_cluster'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git',
		text: 'Ansible Role that sets up a kubernetes cluster. Supports multiple stacked masters as well as single master'
	},
	{
		title: 'Ansible Role kubernetes master security',
		installCommand: 'ansible-galaxy install michaelpalacce.kubernetes_master_security',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git'
			},
			{
				icon: '/resources/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/kubernetes_master_security'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git',
		text: 'Ansible Role that does security checks for kubernetes master nodes'
	},
	{
		title: 'Website',
		technologies: [
			{
				isImg: true,
				content: '/resources/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: true,
				content: '/resources/imgs/technologies/vuejs-logo.svg',
				link: 'https://vuejs.org/'
			},
			{
				isImg: false,
				content: 'EventRequest',
				link: '#EventRequest'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2021',
				link: 'https://github.com/Michaelpalacce/personal-website-vue.git'
			}
		],
		links: [
			{
				icon: '/resources/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/personal-website-vue.git'
			}
		],
		link: 'https://github.com/Michaelpalacce/personal-website-vue.git',
		text: 'Nothing to say really! You are looking at it. Uses NodeJS as a backend, VueJs as the front-end.' +
			'<br/><br/>' +
			'Main idea of this website was to test how ' +
			'<a href="https://github.com/Michaelpalacce/EventRequest" class="text-red-600">EventRequest</a> will handle an actual environment.',
		images: []
	}
];