pipeline {
    agent any
    
    tools {
        // Ensure you have NodeJS configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Install Playwright Browsers') {
            steps {
                // Note: --with-deps may require sudo privileges on your Jenkins server
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Playwright BDD Tests') {
            steps {
                sh 'npx bddgen'
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}