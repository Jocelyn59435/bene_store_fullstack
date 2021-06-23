"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.product_routes = void 0;
const product_1 = require("../models/product");
const store = new product_1.ProductStore();
exports.store = store;
const index = async (_req, res) => {
    try {
        const products = await store.index();
        res.json(products);
    }
    catch (err) {
        res.status(400);
        res.json(err.message);
    }
};
const product_routes = (app) => {
    app.get('/products', index);
};
exports.product_routes = product_routes;
