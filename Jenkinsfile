pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-26' 
    }

    environment {
        URL = 'http://localhost:8080'
    }


    stages {
        // The Checkout stage is removed since Jenkins does it automatically
        
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Playwright BDD Tests') {
            steps {
                bat 'npx bddgen'
                // This ensures failing tests mark the build as UNSTABLE (Yellow) 
                // instead of a fatal pipeline FAILURE (Red)
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                bat 'npx playwright test --grep "Verify login"'
                }
            }
        }
    }
    
    post {
        always {
            // The report will generate whether tests pass or fail
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