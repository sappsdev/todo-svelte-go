# Stage 1: Build the static HTML
FROM node:16-alpine3.14
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]