# syntax=docker/dockerfile:1

# Start your image with a node base image
FROM node:18-alpine

# Create an application directory
RUN mkdir -p /app

# Set the /app directory as the working directory for any command that follows
WORKDIR /app

# Copy the local app package and package-lock.json file to the container
COPY ./backend/package*.json ./

# Copy local directories to the working directory of our docker image (/app)
COPY ./backend/app ./app
COPY ./backend/server.js ./server.js
COPY ./backend/models ./models
COPY ./webapp/dist ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install --production
    # && npm install -g serve \
    # && npm run build \
    # && rm -fr node_modules

# Specify that the application in the container listens on port 3000
EXPOSE 3000

# Enable prod env for better performance
ENV NODE_ENV=production
ENV devmode=true
ENV saltRounds=10
ENV db=test_ganaderia
ENV dbusr=pablo
ENV dbpss=123
ENV srvport=4444
ENV indexpath=./public/index.html
ENV staticpath=./public

# Start the app using serve command
CMD [ "node", "server.js", "--prod" ]
# CMD [ "serve", "-s", "build" ]