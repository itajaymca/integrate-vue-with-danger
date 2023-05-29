pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '20'))
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout Branch') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main'], [name: '*/feature']], // Specify the branch pattern to checkout
                    userRemoteConfigs: [[url: 'https://github.com/itajaymca/integrate-vue-with-danger.git']]])
            }
        }

        stage ('Print all environment variables') {

            script {
                for (def variable in env) {
                    println "Variable: ${variable.key}, Value: ${variable.value}"
                }
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