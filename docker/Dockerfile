FROM node:18-alpine

WORKDIR /app

# Installez les dépendances globales nécessaires
RUN npm install -g typescript ts-node-dev

# Copiez les fichiers de dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers
COPY tsconfig.json ./
COPY src ./src

# Exécutez la compilation TypeScript
RUN npm run build

EXPOSE 3000

# Démarrez l'application en mode dev pour éviter les problèmes de compilation
CMD ["npm", "run", "dev"]