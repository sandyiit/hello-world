# This image comes with Node.js and NPM already installed
FROM node:8

MAINTAINER sandyiit@gmail.com

# Set the working directory to /src
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]