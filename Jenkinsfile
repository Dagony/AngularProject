pipeline {
    agent {
        docker {
            image 'node:9.4.0'
        }
    }

    environment {
        CI = true
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install --save-dev @angular/cli'
                sh 'npm install'
                sh 'apt-get update'
                sh 'apt-get install -y rsync'
                sh 'node --version'
            }
        }

        stage('Run Tests') {
            steps {
                sh './node_modules/@angular/cli/bin/ng test'
            }
        }

        stage('Build Angular') {
            steps {
                sh './node_modules/@angular/cli/bin/ng build'
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
