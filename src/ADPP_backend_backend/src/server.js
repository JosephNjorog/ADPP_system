const app = require('./app');
const config = require('config');
const logger = require('./utils/logger');

const PORT = config.get('port') || 5000;

app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));