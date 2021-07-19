const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('*', (req, res) => {
    res.status(404).send();
});

module.exports = router;