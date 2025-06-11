#!/bin/sh

# Démarrer le service Ollama en arrière-plan
ollama serve &

# Attendre que le service soit prêt
sleep 10

# Définir le modèle à utiliser
MODEL=${MODEL:-"mistral"}
echo "Vérification du modèle: $MODEL"

# Vérifier si le modèle existe déjà
if ollama list | grep -q "$MODEL"; then
    echo "Le modèle $MODEL est déjà installé."
else
    echo "Installation du modèle: $MODEL"
    ollama pull $MODEL
fi

# Garder le conteneur en vie
tail -f /dev/null