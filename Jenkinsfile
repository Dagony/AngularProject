pipeline {
    agent {
        dockerfile {
            dir "buildagent"
        }
    }

    environment {
        CI = true
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install --silent'
                sh 'node --version'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'node_modules/@angular/cli/bin/ng build'
            }
        }

        stage('Test Angular') {
            steps {
                sh 'node_modules/@angular/cli/bin/ng test'
            }
        }

        stage('Test Angular E2E') {
            steps {
                sh 'npm run e2e'
            }
        }

        stage('Publish Angular') {
            when {
                branch 'master'
            }
            steps {
                sshagent(['af33c7f8-32f7-456e-b5b6-f4e16f890eb4']) {
                  sh 'rsync dist/* dagony@chapp.io:angularApp --delete --recursive -e "ssh -p 7022 -o StrictHostKeyChecking=no"'
                }
            }
        }
    }
}

