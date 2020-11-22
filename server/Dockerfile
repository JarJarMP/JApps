# based on this 
# https://mherman.org/blog/dockerizing-an-angular-app/

# base image
# should be reviewed, since this is a Debian based image and we wanted an ubuntu based image
FROM node:15.2.1

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# start app
CMD npm run start