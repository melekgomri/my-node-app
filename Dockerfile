# Utiliser une image officielle Node.js légère
FROM node:18.19.1

# Définir le dossier de travail dans le container
WORKDIR /usr/src/server

# Copier uniquement les fichiers de dépendances pour utiliser le cache Docker
COPY package*.json ./

# Installer les dépendances avec npm ci (rapide et fiable pour les builds)
RUN npm ci --only=production

# Copier le reste de l'application
COPY . .

# Exposer le port sur lequel ton app va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
