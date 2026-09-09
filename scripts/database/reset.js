const fs = require('fs'); const path = require('path'); const f = path.resolve(__dirname, '../../data/geonet_sentinel_data.json'); if (fs.existsSync(f)) fs.unlinkSync(f); require('./seed');
