<!DOCTYPE html>
<html lang="en">
<body>
<h1>Pizza Ordering System</h1>
<p>This repository contains the code for a pizza restaurant management system. The following instructions guide you through deploying the application on Google Cloud Run in 2023.</p>
<h2>Prerequisites</h2>
<ol>
    <li>Install the <a href="https://cloud.google.com/sdk/docs/install">Google Cloud SDK</a></li>
    <li>Install <a href="https://docs.docker.com/get-docker/">Docker</a></li>
    <li>Log in to Google Cloud: <code>gcloud auth login</code></li>
</ol>
<h2>Configure the Project</h2>
<ol>
    <li>Create a new Google Cloud project or use an existing one.</li>
    <li>Set the project ID in your terminal: <code>gcloud config set project PROJECT_ID</code></li>
    <li>Enable Cloud Run API: <code>gcloud services enable run.googleapis.com</code></li>
</ol>
<h2>Create a Dockerfile</h2>
<p>Create a <code>Dockerfile</code> in the root directory of the project:</p>
<div class="code-box">
FROM node:16
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

</div>
<h2>Build the Docker Container</h2>
<p>Build the Docker container by running the following command in the terminal. Replace <code>PROJECT_ID</code> with your actual project ID:</p>
<div class="code-box">
docker build -t gcr.io/PROJECT_ID/pizza-restaurant-management-system .
</div>
<h2>Push the Container to Google Container Registry</h2>
<p>Push the container to Google Container Registry:</p>
<div class="code-box">
docker push gcr.io/PROJECT_ID/pizza-restaurant-management-system
</div>
<h2>Deploy the Container Using Cloud Run</h2>
<p>Deploy the container using Cloud Run with the following command. Replace <code>REGION</code> with your desired region, such as <code>us-central1</code>:</p>
<div class="code-box">
gcloud run deploy pizza-restaurant-management-system \
--image gcr.io/PROJECT_ID/pizza-restaurant-management-system \
--platform managed \
--region REGION \
--allow-unauthenticated
</div>
<p>You should see the deployment's URL after the command completes. Visit the URL to access the pizza restaurant management system application.</p>

<h2>Configure Environment Variables and Secrets</h2>
<p>Make sure to configure environment variables, secrets, and any other required settings for your application when deploying to Google Cloud Run. You can set environment variables using the <code>--set-env-vars</code> flag when deploying with <code>gcloud run deploy</code>. For more information on using environment variables and secrets in Cloud Run, refer to the documentation: <a href="https://cloud.google.com/run/docs/configuring/environment-variables">https://cloud.google.com/run/docs/configuring/environment-variables</a></p>
<h2>Additional Resources</h2>
<p>This is a high-level overview of deploying a containerized application to Google Cloud Run. For more detailed information, consult the official Google Cloud Run documentation: <a href="https://cloud.google.com/run/docs/quickstarts/build-and-deploy">https://cloud.google.com/run/docs/quickstarts/build-and-deploy</a></p>
</body>
</html>
