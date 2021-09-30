# OS version
FROM ubuntu:18.04
# Install basic things
RUN apt-get -y update
RUN apt-get -y install curl
RUN apt-get install -y sudo
RUN sudo apt install -y vim
RUN sudo apt-get install -y git
# Install node & npm
RUN apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN apt -y install nodejs
RUN apt -y  install gcc g++ make
# Make files
WORKDIR /home
RUN mkdir 0x0E-Cookies_local_storage
WORKDIR 0x0E-Cookies_local_storage
# Install webpack
RUN npm i -D webpack
RUN npm i -D webpack-cli
RUN npm install webpack-dev-server --save-dev
# Continue making files
RUN mkdir src
RUN touch src/index.js
RUN touch 0-index.html
RUN touch 1-index.html
RUN touch 2-index.html
RUN touch 3-index.html
RUN touch 4-index.html
RUN touch 5-index.html
RUN touch 6-index.html
RUN touch 7-index.html
