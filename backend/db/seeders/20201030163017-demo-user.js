'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Elyse',
        lastName: 'S',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'FakeUser1',
        lastName: 'Demo',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'FakeUser2',
        lastName: 'Demo',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
