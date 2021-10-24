const express = require('express');
const cors = require('cors')
const Ongs = require('../models/ongs');

const router = express.Router();

router.use(cors())

router.post('/ongRegister', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
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

router.get('/ongRegister', async function(req, res) {
    try {
      let ongs = await Ongs.find({})
      res.send(ongs)
    } catch (error) {
      res.json({error: error}).status(500)
    }
  });

module.exports = app => app.use('/auth', router);