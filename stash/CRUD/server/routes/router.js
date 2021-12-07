'use strict';

const {
    Router
} = require('express');
const router = Router();
const {
    homeRoute,
    addUserRoute,
    updateUserRoute,
    loginRoute,
} = require('../services/render');
const {
    create,
    find,
    update,
    deleteUser
} = require('../controller/controller');

router.get("/", homeRoute);

router.get("/add-user", addUserRoute);
router.get("/login", loginRoute);

router.get("/update-user", updateUserRoute);

// API
router.post('/api/users', create);
router.get('/api/users', find);
router.put('/api/users/:id', update);
router.delete('/api/users/:id', deleteUser);

router.post('/dashboard', find);



module.exports = router;