import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ollama from 'ollama';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/enrich-product', async (req, res) => {
    const product = req.body;

    const systemMessage = {
        role: 'system',
        content: 'Tu es un expert en référencement et enrichissement de produits e-commerce. \n' +
            '                     Ton rôle est d\'analyser les informations fournies sur un produit et de les enrichir \n' +
            '                     en ajoutant des descriptions détaillées, des mots-clés pertinents pour le SEO, \n' +
            '                     et des suggestions d\'amélioration. Réponds uniquement au format JSON valide.\n'
    }

    const userMessage = {
        role: 'user',
        content: `Voici les informations d'un produit à enrichir: ${JSON.stringify(product)}. 
                     Enrichis ces informations en créant un JSON avec les champs suivants:
                     - title: titre optimisé pour le SEO
                     - shortDescription: description courte (max 150 caractères)
                     - longDescription: description détaillée et attractive
                     - seoKeywords: liste de mots-clés pertinents (array)
                     - seoMetaDescription: meta description optimisée (max 160 caractères)
                     - suggestedCategories: catégories suggérées (array)
                     Si certaines informations ne sont pas disponibles dans les données d'origine, 
                     génère-les de façon cohérente.`
    };


    const response = await ollama.chat({
        model: 'mistral',
        messages: [systemMessage, userMessage],
        options: {
            temperature: 0.7,
            num_predict: 2048
        }

    });

    res.json({
        content: response.message.content
    });
});

export default app;