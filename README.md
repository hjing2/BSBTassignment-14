# BSBTassignment-14

# Portfolio Website

## Overview

This is a portfolio website that highlights the course work done thus far in the program. The project is built using React and showcases various projects, skills, and experience. The final submission is a dockerized Create React App site that runs at `localhost:5575`.

## Instructions to Run the Application

### Prerequisites

- Docker installed on your machine.

### Steps to Build and Run

1. **Build the Docker Image:**

   ```sh
   docker build -t jing_haodan_coding_assignment14 .

   ```

2. **Run the Docker Container:**
   ```sh
   docker run -p 5575:80 jing_haodan_coding_assignment14
   ```

## Access the Application

Open your web browser and navigate to http://localhost:5575.

## Project Structure

The project is organized into the following directories:

src/
├── components/
│ ├── Header.js
│ ├── Header.css
│ ├── BasicInfoPage.js
│ ├── WorkExperiencePage.js
│ ├── SkillsPage.js
│ ├── EducationPage.js
│ ├── DeveloperSetupPage.js
├── styles/
│ ├── main.css
│ ├── Header.css
├── App.js
├── index.js

## Features

### Header Component: A navigation bar with links to different sections of the portfolio.

### Basic Info Page: Displays personal information including name, email, location, phone, and LinkedIn profile.

### Work Experience Page: Lists various professional experiences and roles.

### Skills Page: Highlights technical skills, professional expertise, and strengths.

### Education Page: Provides educational background information.

### Developer Setup Page: Describes the developer's preferred setup for coding.

## CI/CD Process

name: CI/CD Pipeline

on:
push:
branches: - main

jobs:

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Build project
      run: npm run build

    - name: Docker build and push
      run: |
        docker build -t jing_haodan_coding_assignment14 .
        docker run -p 5575:80 jing_haodan_coding_assignment14
