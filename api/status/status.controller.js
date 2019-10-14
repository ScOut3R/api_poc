const fs = require('fs');
const {version, description} = require('../../package.json');

const lastCommitId = fs.readFileSync('lastCommitId').toString();

exports.status = (req, res) => {
  const response = {
    'api_poc': [
      {
        'version': version,
        'description': description,
        'lastcommitsha': lastCommitId
      }
    ]
  };

  return res.json(response);
};
