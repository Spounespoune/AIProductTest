# AIProductTest
AIProductTest is a modern REST API that leverages Large Language Models (LLM) to automate and optimize product listing enrichment. Designed for e-commerce professionals and digital marketers, this solution automatically generates SEO-optimized product descriptions, relevant keywords, and categorization suggestions.

## Features
- **Description Enhancement**: Transform basic information into detailed and engaging descriptions
- **SEO Optimization**: Generate titles, meta descriptions, and keywords optimized for search engines
- **Intelligent Categorization**: Suggest relevant categories for each product
- **Input Flexibility**: Efficiently process product data with varying levels of completeness
- **Standardized Format**: Return results in structured JSON format, ready for integration with your system
- **Scalable Architecture**: Designed to adapt to different LLM models according to your needs

## Prerequisites
- Node.js (v18.0.0 or higher)
- Docker and Docker Compose for containerized deployment
- Accessible Ollama server (included in Docker configuration)

## API Usage
### Product Enrichment
**Endpoint**: `POST /enrich-product`
**Request Body**:
```JSON
{
  "name": "Ergonomic Office Chair",
  "price": 199.99,
  "brand": "ComfortPlus",
  "basicDescription": "Office chair with lumbar support",
  "color": "Black",
  "material": "Synthetic leather and mesh"
}
```
**Example Response**:

```JSON
{
  "title": "ComfortPlus Ergonomic Office Chair - Black Synthetic Leather with Lumbar Support",
  "shortDescription": "ComfortPlus ergonomic office chair with integrated lumbar support, black synthetic leather and breathable mesh, ideal for daily comfort.",
  "longDescription": "Discover the ComfortPlus ergonomic office chair, designed to provide optimal comfort during your long workdays. Featuring advanced lumbar support that perfectly matches the natural curve of your spine, this chair significantly reduces fatigue and back pain. The premium black synthetic leather covering offers a professional aesthetic while ensuring exceptional durability, while the mesh inserts guarantee optimal ventilation even on the hottest days. The adjustable armrests and height-adjustable seat allow complete customization according to your body type and workspace. The perfect combination of contemporary design and ergonomic functionality, this ComfortPlus chair will transform your daily work experience.",
  "seoKeywords": [
    "ergonomic office chair",
    "lumbar support",
    "ComfortPlus",
    "synthetic leather chair",
    "black office seat",
    "professional ergonomic chair",
    "comfort office furniture",
    "breathable mesh chair"
  ],
  "seoMetaDescription": "ComfortPlus ergonomic office chair with integrated lumbar support and black synthetic leather upholstery. Optimal comfort for your workdays at a competitive price.",
  "suggestedCategories": [
    "Office Furniture",
    "Ergonomic Chairs",
    "Professional Equipment",
    "Workplace Comfort",
    "Premium Furniture"
  ]
}
```

### API Health Check
**Endpoint**: `GET /status`
**Response**:
```JSON
{
  "status": "ok", 
  "version": "1.0.0", 
  "model": "mistral", 
  "timestamp": "2023-11-05T14:23:45.123Z"
}
```

## Tests
The project includes a comprehensive test suite to ensure feature reliability:

```Script
# Run all tests
npm test
```

## Technical Architecture
AIProductTest is built with the following technologies:
- **Node.js** - Runtime environment
- **TypeScript** - Typed programming language
- **Express.js** - Web framework
- **Ollama** - Interface for local language models
- **Jest** - Testing framework
- **Docker** - Containerization

## Performance Considerations
- Requests to LLM models may take several seconds depending on product complexity
- The API implements timeout and retry mechanisms to handle high load cases
- For high-load production environments, consider using a queue system like RabbitMQ or Redis
