const path = require('path');
const express = require('express');
const helmet = require('helmet');

const config = require('dotenv').config();
const app = express();
app.use(helmet());

const { PORT } = config.parsed;

const publicFolder = path.resolve(__dirname, 'public');

app.use('/', express.static(publicFolder));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(publicFolder, 'index.html'));
});

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.listen(PORT, () => {
	console.log(`Listening on :${PORT}`); // eslint-disable-line no-console
});