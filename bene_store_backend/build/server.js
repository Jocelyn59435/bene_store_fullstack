"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = require("./handlers/products");
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/', function (_req, res) {
    res.send('Welcome to the grocery.');
});
products_1.product_routes(app);
app.listen(port, function () {
    console.log(`Sever is listening to ${port}.`);
});
exports.default = app;
