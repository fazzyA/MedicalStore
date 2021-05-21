FROM node:alpine

WORKDIR /be

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm", "start" ]