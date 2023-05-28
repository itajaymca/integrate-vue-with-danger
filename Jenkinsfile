pipeline {
    agent any

    branchSources {
        branchSource {
            source {
                git {
                    remote('https://github.com/itajaymca/integrate-vue-with-danger.git')
                    // credentialsId('your-credentials-id') // Optional: If authentication is required
                    includes('feature/*') // Specify branch pattern to include
                    excludes('bugfix/*') // Specify branch pattern to exclude
                }
            }
        }
    }

    stages {
        stage('Clean Branch') {
            steps {
                echo 'Clean Branch...'
                // Add build steps here
            }
        }

        stage('Install Packages') {
            steps {
                echo 'Packages...'
                // Add build steps here
            }
        }

        stage('Validate Linting') {
            steps {
                echo 'Linting...'
                // Add build steps here
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Run Unit tests...'
                // Add build steps here
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