FROM node:12
WORKDIR /home/node/app
COPY package*.json ./
RUN npm i
COPY . ./
CMD npm start