import request from 'supertest';
import app from '../src/app';

describe('Product', () => {

    it('should return a enrich product', async () => {

        const product = {
            name: "Chaise de bureau ergonomique",
            price: 199.99,
            brand: "ComfortPlus",
            basicDescription: "Chaise de bureau avec support lombaire",
            color: "Noir",
            material: "Cuir synthétique et maille"
        }


        const response = await request(app)
            .post('/enrich-product')
            .send(product)
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);

        const content = JSON.parse(response.body.content);

        expect(content).toHaveProperty('title');
        expect(content).toHaveProperty('shortDescription');
        expect(content).toHaveProperty('longDescription');
        expect(content).toHaveProperty('seoKeywords');
        expect(content).toHaveProperty('seoMetaDescription');
        expect(content).toHaveProperty('suggestedCategories');

        console.log(content);

    }, 100000);
})