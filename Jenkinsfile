pipeline {

    agent any

    parameters {
        string(name: 'BATCH_WINDOW', defaultValue: 'start /B', description: 'N/A')
    }

    stages {

        stage('Checkout') {
            steps {

                git url: 'https://github.com/itajaymca/integrate-vue-with-danger.git', 
                branch: 'feature/add-code-to-generate-report',
                credentialsId: "${params.GITHUB_TOKEN}"
                
            }
        }

        stage('Init') {

            steps {
                
                echo 'Download all dependencies using command `npm install` '
                script {
                    def logs = bat(returnStdout: true, script: 'npm install')
                    println logs
                }
            }

        }

        stage('Build') {
            
            steps {
                echo 'Step to create artifacts using build'
                script {
                    def logs = bat(returnStdout: true, script: 'npm run build')
                    println logs
                }
                // bat "${params.BATCH_WINDOW} npm run build > output.txt"

            }
        }

        stage('Test') {

            steps {
                echo 'Testing....'
                script {

                    try {
                        def logs = bat(returnStdout: true, script: 'npm run test:unit')
                        println logs

                    }catch (Exception e) {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            // Run your tests here
                            def logs = bat(returnStdout: true, script: 'npm run danger:ci')
                            println logs
                        }
                    }finally {
                        def logs = bat(returnStdout: true, script: 'npm run danger:ci')
                        println logs
                    }
                }
            }
        }

        stage('Danger Report') {

            steps {
                echo 'Danger reports....'
                script {
                    def logs = bat(returnStdout: true, script: 'npm run danger')
                    println logs
                }
                // bat "${params.BATCH_WINDOW} npm run danger > output.txt"
            }
        }

        stage('Deploy') {

            steps {
                echo 'Deploying....'
            }
        }
    }
}