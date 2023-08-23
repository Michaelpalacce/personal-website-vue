module.exports	= [
	{
		title: 'My Website',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: true,
				content: '/imgs/technologies/vuejs-logo.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/personal-website-vue.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/personal-website-vue.git'
			}
		],
		link: 'https://github.com/Michaelpalacce/personal-website-vue.git',
		text: 'Nothing to say really! You are looking at it. Uses NodeJS as a backend, VueJs as the front-end.' +
			'<br/><br/>' +
			'Main idea of this website was to test how ' +
			'<a href="https://github.com/Michaelpalacce/EventRequest" class="text-red-600">EventRequest</a> will handle an actual environment.',
		images: []
	},
	{
		title: 'EventRequest',
		nodeModule: {
			version: '12.x'
		},
		installCommand: 'npm i event_request',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
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
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-16.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-16.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-18.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/linux-18.x/badge.svg'
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
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-16.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-16.x/badge.svg'
			},
			{
				link: 'https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-18.x',
				badge: 'https://github.com/Michaelpalacce/EventRequest/workflows/windows-18.x/badge.svg'
			},
			{
				link: 'https://www.codacy.com/manual/Michaelpalacce/EventRequest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Michaelpalacce/EventRequest&amp;utm_campaign=Badge_Coverage',
				badge: 'https://app.codacy.com/project/badge/Coverage/3c843dd2bc454f06b10eb60820dc6d1b'
			},
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/EventRequest.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/EventRequest.git'
			},
			{
				icon: '/imgs/npm-icon.svg',
				link: 'https://www.npmjs.com/package/event_request'
			}
		],
		link: 'https://github.com/Michaelpalacce/EventRequest.git',
		text: 'EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.' +
			'<br/><br/>' +
			'It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!',
		images: [
			'/imgs/EventRequest-1.svg',
			'/imgs/EventRequest-2.png'
		]
	},
	{
		title: 'ServerEmulator',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: true,
				content: '/imgs/technologies/vuejs-logo.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/Server.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Server.git'
			},
			{
				icon: '/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/repository/docker/stefangenov/server'
			},
			{
				icon: '/imgs/npm-icon.svg',
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
			'/imgs/ServerEmulator-2.png',
			'/imgs/ServerEmulator-3.png',
			'/imgs/ServerEmulator-4.png'
		]
	},
	{
		title: 'SimpleSecrets',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
				link: 'https://nodejs.org/'
			},
			{
				isImg: true,
				content: '/imgs/technologies/vuejs-logo.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/SimpleSecrets.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/SimpleSecrets.git'
			},
			{
				icon: '/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/repository/docker/stefangenov/simplesecrets'
			},
		],
		link: 'https://github.com/Michaelpalacce/SimpleSecrets.git',
		text: 'K8S Secrets manager! A very lightweight secrets manager operator that gets installed in your cluster. Supports encryption.',
		images: [
			'/imgs/projects/simplesecrets/example-1.png',
			'/imgs/projects/simplesecrets/example-2.png',
			'/imgs/projects/simplesecrets/example-3.png',
			'/imgs/projects/simplesecrets/example-4.png',
			'/imgs/projects/simplesecrets/example-5.png',
		]
	},
	{
		title: 'HomeLab',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/k8s.png',
				link: 'https://kubernetes.io/'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/HomeLab.git'
			}
		],
		link: 'https://github.com/Michaelpalacce/HomeLab.git',
		text: 'Contains my entire HomeLab architecture on K8S and all my setup scripts',
		images: [
			'/imgs/projects/homelab/1.png',
			'/imgs/projects/homelab/2.png'
		]
	},
	{
		title: 'Home Recipes',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/Home.git'
			}
		],
		link: 'https://github.com/Michaelpalacce/Home.git',
		text: 'Contains ansible playbooks that setup my home PC. Install updates, setup aliases and take over serves I own.'
	},
	{
		title: 'FsBrowser',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/fs-browser.git'
			},
			{
				icon: '/imgs/npm-icon.svg',
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
			'/imgs/fs-browser-1.svg',
			'/imgs/fs-browser-2.svg',
			'/imgs/fs-browser-3.svg'
		]
	},
	{
		title: 'Redis DataServer',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
			},
			{
				icon: '/imgs/npm-icon.svg',
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
			'/imgs/er_redis_data_server-1.svg'
		]
	},
	{
		title: 'Memcached DataServer',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/node-js-icon.svg',
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
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/er_memcached_data_server.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/er_memcached_data_server.git'
			},
			{
				icon: '/imgs/npm-icon.svg',
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
			'/imgs/er_memcached_data_server-1.svg'
		]
	},
	{
		title: 'Docker Projects',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/docker.png',
				link: 'https://hub.docker.com/'
			}
		],
		badges: [],
		links: [],
		link: 'https://github.com/Michaelpalacce/Docker.git',
		text: 'A collection of Docker containers that I\'ve created overtime'
	},
	{
		title: 'Ansible Role docker',
		installCommand: 'ansible-galaxy install michaelpalacce.docker',
		technologies: [
			{
				isImg: true,
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-docker.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-docker.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
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
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-docker-compose.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-docker-compose.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
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
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-helm.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-helm.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
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
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
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
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
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
				content: '/imgs/technologies/ansible-logo.svg',
				link: 'https://www.ansible.com/'
			}
		],
		badges: [
			{
				badge: 'https://img.shields.io/maintenance/yes/2023',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git'
			}
		],
		links: [
			{
				icon: '/imgs/github-icon.svg',
				link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git'
			},
			{
				icon: '/imgs/ansible-galaxy-icon.svg',
				link: 'https://galaxy.ansible.com/michaelpalacce/kubernetes_master_security'
			},
		],
		link: 'https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git',
		text: 'Ansible Role that does security checks for kubernetes master nodes'
	}
];
