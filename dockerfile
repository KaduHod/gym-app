FROM node
WORKDIR /var/gymApp
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 5555
CMD [ "npm", "start" ]