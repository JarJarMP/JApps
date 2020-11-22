# based on this 
# https://mherman.org/blog/dockerizing-an-angular-app/

# base image
# should be reviewed, since this is a Debian based image and we wanted an ubuntu based image
FROM node:15.2.1

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
# use the same version of cli as in the package.json
# RUN npm install -g @angular/cli@10.1.4

# add app
COPY . /app

# start app
# CMD ng serve --host 0.0.0.0
CMD npm run start