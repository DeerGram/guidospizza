# guidospizza
Pizza Ordering System
To deploy the pizza restaurant management system on Google Cloud in 2023, you can use Google Cloud Run, which is a fully managed compute
platform for deploying and scaling containerized applications. The process consists of several steps, including creating a Docker container, 
pushing it to Google Container Registry, and deploying it using Cloud Run.

Install the required tools:

Install the Google Cloud SDK: https://cloud.google.com/sdk/docs/install
Install Docker: https://docs.docker.com/get-docker/
Log in to Google Cloud: gcloud auth login
Configure the project:

Create a new Google Cloud project or use an existing one.
Set the project ID in your terminal: gcloud config set project PROJECT_ID
Enable Cloud Run API: gcloud services enable run.googleapis.com
Create a Dockerfile in the root directory of the project:

sql

FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
Build the Docker container:

bash
docker build -t gcr.io/PROJECT_ID/pizza-restaurant-management-system .
Replace PROJECT_ID with your actual project ID.

Push the container to Google Container Registry:

perl
docker push gcr.io/PROJECT_ID/pizza-restaurant-management-system

Deploy the container using Cloud Run:

sql
gcloud run deploy pizza-restaurant-management-system \
  --image gcr.io/PROJECT_ID/pizza-restaurant-management-system \
  --platform managed \
  --region REGION \
  --allow-unauthenticated
Replace REGION with your desired region, such as us-central1.

You should see the deployment's URL after the command completes. Visit the URL to access the pizza restaurant management system application.

Make sure to configure environment variables, secrets, and any other required settings for your application when deploying to Google Cloud Run. 
You can set environment variables using the --set-env-vars flag when deploying with gcloud run deploy. For more information on using environment 
variables and secrets in Cloud Run, refer to the documentation: https://cloud.google.com/run/docs/configuring/environment-variables

This is a high-level overview of deploying a containerized application to Google Cloud Run. For more detailed information, consult the official 
Google Cloud Run documentation: https://cloud.google.com/run/docs/quickstarts/build-and-deploy
