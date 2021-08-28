def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  emailext (
      subject: "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      to: '$DEFAULT_RECIPIENTS',
      body: """
STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':

Check console output at "${env.JENKINS_URL}/job/${env.JOB_NAME}/${env.BUILD_NUMBER}"
"""
    )
}
def notifyFailed() {
  emailext (
      subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      to: '$DEFAULT_RECIPIENTS',
      body: """
FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':

Check console output at "${env.JENKINS_URL}/job/${env.JOB_NAME}/${env.BUILD_NUMBER}"
"""
    )
}
def notifySuccessful() {
  emailext (
      subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      to:'$DEFAULT_RECIPIENTS',
      body: """
SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':

Open: https://stefangenov.site to check out your new settings!

Check console output at "${env.JENKINS_URL}/job/${env.JOB_NAME}/${env.BUILD_NUMBER}"
"""
    )
}

pipeline {
	agent { label 'nodejs-16' }

	post{
		failure{
			notifyBuild("FAILED")
		}
		success{
			notifySuccessful()
		}
	}

	stages {
		stage('Notify'){
			steps{
				notifyBuild()
			}
		}
		stage( 'Fetch repo' ) {
			steps {
				withCredentials([string(credentialsId: 'github-access-token', variable: 'GITHUBTOKEN')]) {
					sh """
						git clone https://github.com/Michaelpalacce/personal-website-vue.git website
						cd website
						git remote set-url origin https://$GITHUBTOKEN@github.com/Michaelpalacce/personal-website-vue.git
					"""
				}
			}
		}

		stage('Build') {
			steps {
			  sh """
				cd website
				npm i
				npm run build
			  """
			}
		}

		stage('Commit') {
			steps {
				script {
					try {
						sh """
						 cd website
						 git config --global user.email "stefantigro@gmail.com"
						 git config --global user.name "Stefan Genov"
						 git add .
						 git commit -am "[jenkins-ci-cd] Auto build"
						"""
					}
					catch(exc){}
				}
			}
		}

		stage('Push') {
			steps {
			  sh """
				 cd website
				 git push --set-upstream origin master
			  """
			}
		}

		stage("Put sh script and exec") {
			steps {
				withCredentials([sshUserPrivateKey(credentialsId: 'aws', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
					script {
						def remote = [:]
						remote.name = "lightsail"
						remote.host = "18.130.198.239"
						remote.allowAnyHosts = true
						remote.user = userName
						remote.identityFile = identity

						writeFile file: 'deploy.sh', text: 'cd personal-website-vue && sudo git pull && sudo npm ci --only=prod && sudo pm2 reload site'
						sshPut remote: remote, from: 'deploy.sh', into: '.'
						sshScript remote: remote, script: 'deploy.sh'
						sshRemove remote: remote, path: 'deploy.sh'
					}
				}
			}
		}
   }
}
