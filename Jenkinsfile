pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '20'))
        disableConcurrentBuilds()
    }

    stages {

        stage('Clean working directory') {
            steps {
                deleteDir() // Clean the workspace directory
            }
        }

        stage('Install Packages') {
            steps {
                echo 'Install packages'
                bat 'npm install'
                // Add build steps here
            }
        }

        stage('Validate Linting') {
            steps {
                echo 'Run Lint command'
                bat 'npm run lint'
                // Add build steps here
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Run Unit tests...'
                bat 'npm run test:unit'
            }
        }

        stage('Run Sonar Code Coverage') {
            steps {
                echo 'Sonar code coverage...'
                // Add build steps here
            }
        }

        stage('Run Dependency') {
            steps {
                echo 'Dependency...'
                // Add build steps here
            }
        }

        stage('Build Artifact') {
            steps {
                echo 'Building Artifact...'
                // Add build steps here
            }
        }

    }


}