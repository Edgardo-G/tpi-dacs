FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3001
EXPOSE 9229

VOLUME ["./src:/usr/src/app/src", "./db:/usr/src/app/db"]

ENV EXTERNAL_HOST dacs_external
ENV REDIS_HOST dacs_redis_db
ENV TURISMO_CONTROL_HOST turismo_control

CMD [ "npm", "run", "start" ]
