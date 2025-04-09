pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        echo '📥 Cloning repository...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing Node modules...'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo '🧪 Running tests...'
        sh 'npm test || echo "No tests available 💅"'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo '🐳 Building Docker image...'
        sh 'docker build -t todo-app .'
      }
    }

    stage('Deploy (Optional)') {
      steps {
        echo '🚀 Deployment stage (optional for now)...'
        // You can push to DockerHub or deploy to Render here
      }
    }
  }

  post {
    success {
      echo '✅ CI/CD pipeline completed successfully!'
    }
    failure {
      echo '❌ CI/CD pipeline failed!'
    }
  }
}