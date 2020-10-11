const DB = require('../../common/inMemoryDB');

const getAll = async () => DB;

const get = async id => {
  const query = DB.filter(el => el.id === id);
  const [user = null] = query;
  return user;
};

module.exports = { getAll, get };
