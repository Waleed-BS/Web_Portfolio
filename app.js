const path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();
const router = express.Router();

const PORT = (process.env.PORT || 3000);
const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(__dirname, 'dist/index.html');


if (process.env.NODE_ENV === 'development') {
  /* development environment */
  const compiler = webpack(config)

  router.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
    noInfo: true,
  }));
  router.use(webpackHotMiddleware(compiler));

  // router.get('/', (req, res, next) => res.render(HTML_FILE))

  router.get("*", (req, res, next) => {
		compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});

  app.use(router);

} else {
  /* production environment */
  router.use(express.static(DIST_DIR));
  router.get('/', (req, res) => res.sendFile(HTML_FILE));
  app.use(router);
}

console.log('express server is listening on port', PORT);

app.set('port', PORT);

app.listen(app.get('port'));
