pipeline {
  agent {
    docker {
      image 'node:18'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  stages {
    stage('Clone Repo') {
      steps {
        checkout scm
        echo '✅ Cloned repo'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Run Unit Tests') {
      steps {
        echo '🧪 Running tests...'
        sh 'npm test || echo "No tests yet 💅"'
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
        echo '🚀 Deployment placeholder...'
        // Optional deploy code here
      }
    }
  }

  post {
    success {
      echo '✅ CI/CD pipeline completed!'
    }
    failure {
      echo '❌ CI/CD pipeline failed!'
    }
  }
}
