const router = require('express').Router();
const pool = require('../db');

//get countycut dataset
router.get('/api/countycut', async(req, res) => {
    try {
        const countycut = await pool.query("SELECT id, ST_AsGeojson(geom)::json as polygon, name FROM public.countycut");
        res.json(countycut);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;