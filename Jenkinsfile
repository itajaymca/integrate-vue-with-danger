

node {

    stage('Checkout'){
        // Checkout the repository
        checkout([
            $class: 'GitSCM', 
            branches: [[name: '*/main']], 
            userRemoteConfigs: [[url: 'https://github.com/itajaymca/integrate-vue-with-danger.git']]])
    }

    stage('Install Dependencies') {
        // Execute npm install command
        bat 'npm install'  // For Windows agents
    }

    stage('Lint') {
        // Execute npm install command
        bat 'npm run lint'  // For Windows agents
    }

    stage('Build') {
        // Use the declared parameters
        bat 'npm run build'  // For Windows agents
    }

    stage('Test') {
        bat 'npm run test'  // For Windows agents
    }

    stage('Deploy') {
        // Deploy the artifacts
        // ...
    }
}
