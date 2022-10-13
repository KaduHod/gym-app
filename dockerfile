FROM node
WORKDIR /usr/src/GymApp 
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 5555
CMD [ "npm", "start" ]