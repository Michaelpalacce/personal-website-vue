module.exports	= [
	{
		name: 'Languages',
		command: 'kubectl get po -n languages',
		shown: true,
		items: [
			{
				name: 'TS/Typescript',
				ready: '5/5',
				status: 'Running',
				age: '2021',
				node: 'both'
			},
			{
				name: 'JS/JavaScript',
				ready: '5/5',
				status: 'Running',
				age: '2014',
				node: 'both'
			},
			{
				name: 'NodeJS',
				ready: '5/5',
				status: 'Running',
				age: '2018',
				node: 'both'
			},
			{
				name: 'PHP',
				ready: '5/5',
				status: 'Running',
				age: '2014',
				node: 'both'
			},
			{
				name: 'Python',
				ready: '2/5',
				status: 'Running',
				age: '2017',
				node: 'both'
			},
			{
				name: 'Java',
				ready: '3/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'Go',
				ready: '4/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			},
			{
				name: 'Lua',
				ready: '2/5',
				status: 'Running',
				age: '2023',
				node: 'amateur'
			},
		]
	},
	{
		name: 'Cloud',
		command: 'kubectl get po -n cloud',
		shown: false,
		items: [
			{
				name: 'AWS/Amazon Web Services',
				ready: '4/5',
				status: 'Running',
				age: '2018',
				node: 'professionally'
			},
			{
				name: 'DigitalOcean',
				ready: '3/5',
				status: 'Running',
				age: '2018',
				node: 'amateur'
			},
		]
	},
	{
		name: 'Virtualization',
		command: 'kubectl get po -n virtualization',
		shown: false,
		items: [
			{
				name: 'Proxmox',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'amateur'
			},
			{
				name: 'ESXi',
				ready: '3/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'vCenter',
				ready: '3/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'vRealize Orchestratpr',
				ready: '5/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'vRealize Automation',
				ready: '5/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
		]
	},
	{
		name: 'Frameworks',
		command: 'kubectl get po -n frameworks',
		shown: false,
		items: [
			{
				name: 'VueJs',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'amateur'
			},
			{
				name: 'Gin',
				ready: '4/5',
				status: 'Running',
				age: '2023',
				node: 'amateur'
			},
			{
				name: 'Symfony',
				ready: '3/5',
				status: 'Completed',
				age: '2016',
				node: 'professionally'
			},
		]
	},
	{
		name: 'Containers',
		command: 'kubectl get po -n containers',
		shown: false,
		items: [
			{
				name: 'Docker',
				ready: '5/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			},
			{
				name: 'K8S',
				ready: '5/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			},
			{
				name: 'Tanzu',
				ready: '4/5',
				status: 'Running',
				age: '2022',
				node: 'professionally'
			},
			{
				name: 'Docker Swarm',
				ready: '5/5',
				status: 'Completed',
				age: '2020',
				node: 'both'
			},
			{
				name: 'Docker Compose',
				ready: '5/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			}
		]
	},
	{
		name: 'DevOps',
		command: 'kubectl get po -n dev-ops',
		shown: false,
		items: [
			{
				name: 'Ansible',
				ready: '5/5',
				status: 'Running',
				age: '2019',
				node: 'both'
			},
			{
				name: 'Jenkins',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'amateur'
			},
			{
				name: 'Chef',
				ready: '3/5',
				status: 'Completed',
				age: '2018',
				node: 'professionally'
			},
			{
				name: 'Atlassian Products',
				ready: '4/5',
				status: 'Running',
				age: '2016',
				node: 'professionally'
			},
			{
				name: 'TeamCity',
				ready: '2/5',
				status: 'Running',
				age: '2021',
				node: 'amateur'
			},
			{
				name: 'Linux',
				ready: '5/5',
				status: 'Running',
				age: '2016',
				node: 'both'
			}
		]
	},
	{
		name: 'Databases',
		command: 'kubectl get po -n databases',
		shown: false,
		items: [
			{
				name: 'Cassandra DB',
				ready: '5/5',
				status: 'Running',
				age: '2016',
				node: 'professionally'
			},
			{
				name: 'Mongo DB',
				ready: '3/5',
				status: 'Running',
				age: '2018',
				node: 'amateur'
			},
			{
				name: 'Elasticsearch',
				ready: '2/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			}
		]
	},
	{
		name: 'Industry Knowledge',
		command: 'kubectl get po -n industry-knowledge',
		shown: false,
		items: [
			{
				name: 'Agile',
				ready: '4/5',
				status: 'Running',
				age: '2016',
				node: 'professionally'
			}
		]
	},
	{
		name: 'Other',
		command: 'kubectl get po -n misc',
		shown: false,
		items: [
			{
				name: 'GIT',
				ready: '5/5',
				status: 'Running',
				age: '2016',
				node: 'both'
			},
			{
				name: 'Maven',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'Vim',
				ready: '4/5',
				status: 'Running',
				age: '2023',
				node: 'both'
			},
			{
				name: 'Websockets',
				ready: '4/5',
				status: 'Running',
				age: '2023',
				node: 'amateur'
			}
		]
	},
	{
		name: 'Testing',
		command: 'kubectl get po -n tdd',
		shown: false,
		items: [
			{
				name: 'PHPUnit',
				ready: '5/5',
				status: 'Running',
				age: '2016',
				node: 'professionally'
			},
			{
				name: 'Jest',
				ready: '3/5',
				status: 'Running',
				age: '2018',
				node: 'amateur'
			},
			{
				name: 'Jasmine',
				ready: '5/5',
				status: 'Running',
				age: '2021',
				node: 'both'
			},
			{
				name: 'EventRequest Test Suite',
				ready: '5/5',
				status: 'Running',
				age: '2017',
				node: 'amateur'
			},
			{
				name: 'Junit',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
			{
				name: 'Mockito',
				ready: '4/5',
				status: 'Running',
				age: '2021',
				node: 'professionally'
			},
		]
	},
];
