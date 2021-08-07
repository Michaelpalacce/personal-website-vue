module.exports	= [
	{
		name: 'Languages',
		command: 'kubectl get po -n languages',
		shown: true,
		abilities: [
			{
				name: 'JS',
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
				node: 'professionally'
			},
			{
				name: 'Python',
				ready: '2/5',
				status: 'Completed',
				age: '2017',
				node: 'amateur'
			},
			{
				name: 'Typescript',
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
		abilities: [
			{
				name: 'AWS',
				ready: '4/5',
				status: 'Running',
				age: '2018',
				node: 'professionally'
			}
		]
	},
	{
		name: 'Frameworks',
		command: 'kubectl get po -n frameworks',
		shown: false,
		abilities: [
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
				status: 'Running',
				age: '2016',
				node: 'amateur'
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
		abilities: [
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
		name: 'CI/CD tools',
		command: 'kubectl get po -n ci-cd-tools',
		shown: false,
		abilities: [
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
			}
		]
	},
	{
		name: 'Databases',
		command: 'kubectl get po -n databases',
		shown: false,
		abilities: [
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
];