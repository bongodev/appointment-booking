FROM node:20-slim

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev", "--host" ]