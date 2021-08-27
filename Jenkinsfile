node( 'nodejs-16.7' ) {
    stage( 'Install git' ) {
          sh """
            apk add git
          """
    }

    stage( 'Fetch repo' ) {
        withCredentials([string(credentialsId: 'github-access-token', variable: 'GITHUBTOKEN')]) {
          sh """
            git clone https://github.com/Michaelpalacce/personal-website-vue.git website
            cd website
            git remote set-url origin https://$GITHUBTOKEN@github.com/Michaelpalacce/personal-website-vue.git
          """
        }
    }

    stage('Build') {
      sh """
        cd website
        npm i
        npm run build
      """
    }

    stage('Push') {
      sh """
        cd website
        git config --global user.email "stefantigro@gmail.com"
        git config --global user.name "Stefan Genov"
        git add .
        git commit -am "[jenkins-ci-cd] Auto build"
        git push --set-upstream origin master
      """
    }
}

def remote = [:]
remote.name = "lightsail"
remote.host = "18.130.198.239"
remote.allowAnyHosts = true

node {
    withCredentials([sshUserPrivateKey(credentialsId: 'aws', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
        remote.user = userName
        remote.identityFile = identity
        stage("Put sh script and exec") {
            writeFile file: 'deploy.sh', text: 'cd personal-website-vue && sudo git pull && sudo npm ci --only=prod && sudo pm2 reload site'
            sshPut remote: remote, from: 'deploy.sh', into: '.'
            sshScript remote: remote, script: 'deploy.sh'
            sshRemove remote: remote, path: 'deploy.sh'
        }
    }
}