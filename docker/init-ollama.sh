#!/bin/sh

ollama serve &

sleep 10

MODEL=${MODEL:-"mistral"}
echo "Vérification du modèle: $MODEL"

if ollama list | grep -q "$MODEL"; then
    echo "Le modèle $MODEL est déjà installé."
else
    ollama pull $MODEL
fi

tail -f /dev/null