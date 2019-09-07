# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:10
ENV SERVER_PORT=8080
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
# May need to use a package-lock.json isntead of yarn.lock if this command ignores yarn.lock
RUN npm ci --only=production
COPY ./server ./server
EXPOSE 8080
CMD ["npm", "run", "start"]
