module.exports	= [
	{
		name: 'Languages',
		command: 'kubectl get po -n languages',
		shown: true,
		items: [
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
				status: 'Completed',
				age: '2017',
				node: 'both'
			},
			{
				name: 'TS/Typescript',
				ready: '3/5',
				status: 'Running',
				age: '2021',
				node: 'both'
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
				name: 'Symfony',
				ready: '3/5',
				status: 'Completed',
				age: '2016',
				node: 'professionally'
			},
			{
				name: 'KoaJS',
				ready: '2/5',
				status: 'Running',
				age: '2021',
				node: 'amateur'
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
				ready: '4/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			},
			{
				name: 'Docker Swarm',
				ready: '4/5',
				status: 'Completed',
				age: '2020',
				node: 'both'
			},
			{
				name: 'Docker Compose',
				ready: '4/5',
				status: 'Running',
				age: '2020',
				node: 'both'
			}
		]
	},
	{
		name: 'DevOps tools',
		command: 'kubectl get po -n ci-cd-tools',
		shown: false,
		items: [
			{
				name: 'Ansible',
				ready: '4/5',
				status: 'Running',
				age: '2019',
				node: 'both'
			},
			{
				name: 'Jenkins',
				ready: '3/5',
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
				ready: '3.5/5',
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
				ready: '4/5',
				status: 'Running',
				age: '2016',
				node: 'professionally'
			},
			{
				name: 'Mongo DB',
				ready: '2.5/5',
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
				ready: '4/5',
				status: 'Running',
				age: '2016',
				node: 'both'
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
				ready: '2/5',
				status: 'Running',
				age: '2018',
				node: 'amateur'
			},
			{
				name: 'EventRequest Test Suite',
				ready: '5/5',
				status: 'Running',
				age: '2017',
				node: 'amateur'
			},
		]
	},
];