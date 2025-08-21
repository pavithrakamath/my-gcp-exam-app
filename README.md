# My GCP Exam App
[![Deploy React App](https://github.com/pavithrakamath/my-gcp-exam-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/pavithrakamath/my-gcp-exam-app/actions/workflows/deploy.yml)

A React application built with Create React App and Tailwind CSS for GCP exam preparation.

## Features

- Modern React application with Tailwind CSS
- Multiple test modes:
  - Practice Tests: Full-length practice exams
  - Quick Practice: Random questions for quick review
  - Review Mode: Focus on specific topics
- Interactive UI with immediate feedback
- Real-time answer validation
- Detailed explanations with AI-powered elaboration
- Timer for exam mode
- Automated testing setup
- Continuous Deployment with GitHub Actions
- Deployed to GitHub Pages

## Test Modes

### Practice Tests
- Full-length practice exams
- Timer to simulate real exam conditions
- Score calculation at the end
- Review of all answers

### Quick Practice
- Random questions from all topics
- Immediate feedback on answers
- Detailed explanations
- Option to get AI-elaborated explanations

### Review Mode
- Focus on specific topics
- Practice at your own pace
- Immediate feedback
- Detailed explanations

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/pavithrakamath/my-gcp-exam-app.git
cd my-gcp-exam-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Deployment

This application is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. Runs on every push to the `main` branch
2. Installs dependencies
3. Runs tests
4. Builds the application
5. Deploys to GitHub Pages

The application is available at: [https://pavithrakamath.github.io/my-gcp-exam-app](https://pavithrakamath.github.io/my-gcp-exam-app)

## Technologies Used

- React
- Tailwind CSS
- GitHub Actions
- GitHub Pages
- Gemini API for AI-powered explanations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
