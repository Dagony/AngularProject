pipeline {
    agent {
        docker {
            image 'node'
        }
    }

    environment {
        CI = true
    }

    stage {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install @angular/cli'
                sh 'apt-get update'
                sh 'apt-get install -y rsync'
            }
        }

    }
}
