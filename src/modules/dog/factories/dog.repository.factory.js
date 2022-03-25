const DogRepository = require('../dog.repository');
// TODO: Use your favorite DB :)
const database = require('../../../infra/database');

exports.dogRepositoryFactory = () => new DogRepository(database.connect());
