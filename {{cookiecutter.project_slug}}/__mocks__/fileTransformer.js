import path from 'path';

export default (src, filename, config, options) =>
  `module.exports = ${JSON.stringify(path.basename(filename))};`;
