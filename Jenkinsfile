pipeline {
    agent any
    
    tools {
        // Ensure you have NodeJS configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS-26' 
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
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }
}