pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'Gayatri-bhatkulkar/nodejs-app'  // Replace with your Docker Hub repo
    }

    stages {
        stage('Clone from GitHub') {
            steps {
                git url: 'Gayatri-bhatkulkarhttps://github.com//NodeApp.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB_CREDENTIALS', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    script {
                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
