pipeline {
    agent any
    
   tools {
    nodejs 'NodeJS-26'
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
                bat 'npx playwright install'
            }
        }
        
        stage('Run Playwright BDD Tests') {
            steps {
                bat 'npx bddgen'
                // This ensures failing tests mark the build as UNSTABLE (Yellow) 
                // instead of a fatal pipeline FAILURE (Red)
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    withEnv(['URL=http://localhost:8080']) {
                        bat 'npx playwright test --grep "Verify login"'
                    }
                }
                // Debug visibility in Jenkins logs to ensure Allure input exists
                bat 'if exist allure-results (echo allure-results found & dir allure-results) else (echo allure-results missing)'
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