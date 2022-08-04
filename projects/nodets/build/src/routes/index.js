"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controller/IndexController");
const router = (0, express_1.Router)();
router.get('/', IndexController_1.indexController.index);
router.get('/create', (req, res) => {
    res.render('books/create', { title: 'welcome to books app' });
});
exports.default = router;
