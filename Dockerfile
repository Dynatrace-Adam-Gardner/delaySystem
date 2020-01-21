FROM node
COPY express.js .
COPY index.html .
COPY package.json .
RUN npm install
CMD ["node", "express.js"]
