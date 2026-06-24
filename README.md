# Multi-Stage Docker Build Demo

This repository demonstrates how to use multi-stage Docker builds to create optimized, production-ready images.  
The sample application is a simple Node.js web app that serves as a demonstration for containerization techniques. The application itself is secondary; the primary goal is to showcase Docker best practices.

## Key Features
- Multi-stage Dockerfile that separates build and runtime stages
- Optimized image size using a lightweight base image (`node:alpine`)
- Clear separation of dependencies and runtime environment
- Ready for deployment to cloud platforms such as AWS, Kubernetes, or Docker Hub

## Running Locally
To run the application without Docker:

```bash
npm install
npm start
Running with Docker
To build and run the application inside a Docker container:

bash
docker build -t multi-stage-demo .
docker run -p 3000:3000 multi-stage-demo
