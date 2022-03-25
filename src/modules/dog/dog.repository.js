const { DatabaseError } = require('../../utils/errors');

/**
 * @typedef DogRepository
 */
class DogRepository {
  /**
   * @constructor
   * @param { Sequelize } orm
   */
  constructor(orm) {
    this.orm = orm;

    this.retrieve = this.retrieve.bind(this);
    this.retrieveById = this.retrieveById.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * @name retrieve
   * @param { {} } filterValues
   * @param { { limit: number, offset: number } } pagination
   * @return { Promise<*> }
   */
  async retrieve(filterValues = {}, pagination = { limit: 10, offset: 0 }) {
    const { limit, offset } = pagination;
    const { Dog } = this.orm.models;

    try {
      return Dog.findAll({
        where: filterValues,
        limit,
        offset,
      });
    } catch (e) {
      throw new DatabaseError({ message: e.message });
    }
  }

  /**
   * @name retrieveById
   * @param { number } dogId
   * @return { Promise<*> }
   */
  async retrieveById(dogId) {
    const { Dog } = this.orm.models;

    try {
      return Dog.findByPk(dogId);
    } catch (e) {
      throw new DatabaseError({ message: e.message });
    }
  }

  /**
   * @name insert
   * @param { Dog } dog
   * @return {Promise<*|undefined|(*&{createdAt: number, id: number, updatedAt: number})>}
   */
  async insert(dog) {
    const { Dog } = this.orm.models;

    try {
      return Dog.create(dog);
    } catch (e) {
      throw new DatabaseError({ message: e.message });
    }
  }

  /**
   * @name update
   * @param { number } dogId
   * @param { Dog } dog
   * @return { Promise<*|undefined|(*&{createdAt: number, id: number, updatedAt: number})> }
   */
  async update(dogId, dog) {
    const { Dog } = this.orm.models;

    try {
      return Dog.update(dog, {
        where: {
          id: dogId,
        },
      });
    } catch (e) {
      throw new DatabaseError({ message: e.message });
    }
  }

  /**
   * @name delete
   * @param { number } dogId
   * @return {Promise<number>}
   */
  async delete(dogId) {
    const { Dog } = this.orm.models;

    try {
      return Dog.destroy({
        where: {
          id: dogId,
        },
      });
    } catch (e) {
      throw new DatabaseError({ message: e.message });
    }
  }
}

module.exports = DogRepository;
