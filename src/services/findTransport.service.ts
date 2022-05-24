import Transp from '../externals/models/transp';

const findTransport = () => {
  const get = (id) => Transp.findByPk(id);
  const getAll = () => Transp.findAll();

  return {
    get,
    getAll,
  };
};

export default findTransport;
