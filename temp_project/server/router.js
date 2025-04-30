import express from 'express';
import { createProduct, createOrderTransaction, createUser } from './controller.js';

const router = express.Router();

// Add Product
router.post('/product', async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add Order Transaction
router.post('/order', async (req, res) => {
    try {
        const newOrder = await createOrderTransaction(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add User
router.post('/user', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;