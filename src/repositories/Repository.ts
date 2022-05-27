/* eslint-disable no-unused-vars */
export default interface Repository {
  get(id: number): any;
  getAll(page: number, limit: number): any[];
  create(data: any, relation?: any): any;
  update(id: number, data: any): any;
  remove(id: number): any;
}
