# Usa un'immagine di base con Node.js
#FROM node:14-slim

# Imposta la directory di lavoro all'interno del container
#WORKDIR /app

# Copia il package.json e il package-lock.json nella directory di lavoro
#COPY package*.json ./

# Installa le dipendenze del progetto
#RUN npm install

# Copia tutto il codice sorgente nella directory di lavoro
#COPY . .

# Build del progetto
#RUN npm run build

# Espone la porta 3000 del container
#EXPOSE 3000

# Comando di avvio dell'applicazione React
#CMD ["npm", "start"] 









# Dockerfile
FROM node:14-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
