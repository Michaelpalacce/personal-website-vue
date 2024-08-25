'use strict';

const app = require('event_request')();
const blogsController = require('./blog/controller/controller');
const projectsController = require('./projects/controller/controller');
const readmeController = require('./readme/controller/controller');

const path = require('path');
const fs = require('fs');
const PROJECT_ROOT = path.parse(require.main.filename).dir;

// Public section
app.add('/api', blogsController);
app.add('/api', projectsController);
app.add('/api', readmeController);

// Serve Static Resources
app.apply(app.er_static, { paths: ['dist'], cache: { cacheControl: 'public', expirationDirectives: { 'max-age': 3600 } } });

// CV
app.get('/CV', app.er_cache.cache({ cacheControl: 'public', expirationDirectives: { 'max-age': 3600 } }), (event) => {
	event.setResponseHeader('Content-Type', 'application/pdf');
	const CV_PATH = process.env.CV_PATH || `${PROJECT_ROOT}/dist/CV.pdf`;
	fs.createReadStream(CV_PATH).pipe(event.response);
});

// Frontend
app.get((event) => {
	event.setResponseHeader('Content-Type', 'text/html');
	fs.createReadStream(`${PROJECT_ROOT}/dist/index.html`).pipe(event.response);
});
