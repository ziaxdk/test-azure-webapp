FROM node:8.9.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["index.js", "package.json", "./"]
RUN npm install --production
EXPOSE 8080
CMD ["npm", "start"]