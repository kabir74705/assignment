const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"imagemetadata",
    password:"kabir123",
    port:5432,
});
module.exports = pool;