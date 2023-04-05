const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'webdev',
    password: 'Cl@yt0n42!',
    host: '172.16.15.205',
    port: 5433,
    database: 'webdev-gis'
});

module.exports = pool;