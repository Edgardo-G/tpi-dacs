import ExternalRepository from './ExternalRepository';
import request from '../utils/request';
import config from '../config';

const { externalApi } = config;
const apiName = 'show';

export default class ExtShowRepository implements ExternalRepository {
  async get(id) {
    return request.get(`${externalApi}/${apiName}/${id}`);
  }

  async getAll() {
    return request.get(`${externalApi}/${apiName}/`);
  }

  async select(id, places) {
    return request.post(`${externalApi}/${apiName}/${id}`, {
      places,
    });
  }
}
