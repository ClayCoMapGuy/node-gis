const router = require('express').Router();
const pool = require('../db');

//get countycut dataset
router.get('/api/countycut', async(req, res) => {
    try {
        const countycut = await pool.query(
            "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM countycut AS t"
            );
        res.json(countycut.rows);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;