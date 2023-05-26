pipeline {

    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }

    stages {

        stage('Init') {

            steps {
                
                echo 'Download all dependencies using command `npm install` '

                sh 'npm install'

            }

        }

        stage('Build') {
            
            steps {
                echo 'Step to create artifacts using build'

                sh 'npm run build'
            }
        }

        stage('Test') {

            steps {
                echo 'Testing....'
            }
        }

        stage('Deploy') {

            steps {
                echo 'Deploying....'
            }
        }
    }
}