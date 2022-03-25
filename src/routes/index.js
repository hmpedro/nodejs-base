const { Router } = require('express');
const dogRouter = require('../modules/dog/dog.routes');
const healthRouter = require('../modules/health/health.routes');
const v1Router = require('./v1');

const router = Router();

router.use('/dogs', dogRouter);
router.use('/health', healthRouter);
router.use('/v1', v1Router);

module.exports = router;
