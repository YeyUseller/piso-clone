FROM node:18
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production || true
COPY . .
CMD ["npm", "run", "server"]
