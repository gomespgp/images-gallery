FROM node:16-alpine3.11

WORKDIR /app

EXPOSE 3000

COPY package.json yarn.lock ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]