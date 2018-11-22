const version = require('../../package.json').version;
const description = require('../../package.json').description;

exports.metadata = (req, res, next) => {
  const response = {
    "api_poc": [
      {
        "version": version,
        "description": description
      }
    ]
  };

  return res.json(response);
};
