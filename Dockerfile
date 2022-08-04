FROM node:16-alpine as build

# Create and set the working directory on the container
# then copy over the package.json and package-lock.json
WORKDIR /app
COPY package*.json ./

# Install the node packages before copying the files
RUN npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps



# install react-scripts if needed
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

# build your app
RUN npm run build

# production environment
FROM nginx:1.17.4-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
# change the left path with yours, below the file content

COPY src/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
