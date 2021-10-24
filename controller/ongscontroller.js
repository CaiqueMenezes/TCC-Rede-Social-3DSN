const express = require('express');

const Ongs = require('../models/ongs');

const router = express.Router();

router.post('/ongRegister', async (req,res) => {
    const { email } = req.body;

    try {
        if (await Ongs.findOne({ email }))
            return res.status(400).send({ error: 'Email already exists' });

        const ongs = await Ongs.create(req.body);

        return res.send({ ongs });
    } catch (err) {
        return res.status(400).send({ error: 'Ong registration failed' });
    }
});

module.exports = app => app.use('/auth', router);