const { Sequelize } = require('sequelize');

/* module.exports = new Sequelize('user-api', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  }); */

  const db = () => {
      const connection = new Sequelize('user-api', 'postgres', process.env.DB_PASSWORD, {
        host: 'host.docker.internal',
        dialect: 'postgres'
      });

      return connection;
  };

  module.exports = db;
