pipeline {
    agent {
        docker {
            image 'node'
        }
    }

    environment {
        CI = true
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install @angular/cli --save'
                sh 'npm install'
                sh 'apt-get update'
                sh 'apt-get install -y rsync'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'ng test'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'ng build'
            }
        }

        stage('Publish Angular') {
            when {
                branch 'master'
            }
            steps {
                sshagent(['af33c7f8-32f7-456e-b5b6-f4e16f890eb4']) {
                  sh 'rsync build/* dagony@chapp.io:angularApp --delete --recursive -e "ssh -p 7022 -o StrictHostKeyChecking=no"'
                }
            }
        }
    }
}
