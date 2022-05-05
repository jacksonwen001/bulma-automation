const jsonServer = require('json-server');
const _ = require('lodash');

module.exports = (files) => {
	let db = {};

	for (let file of files) {
		if (file.match(/db\.js$/gi)) {
			let data = require(file);
			db = _.merge(db, data);
		}
	}

	return jsonServer.router(db);
};