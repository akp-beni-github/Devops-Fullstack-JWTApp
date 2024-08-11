// backend/models/user.js
require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize');
// Initialize Sequelize
const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log // Enable logging for development
  });
  
  // Sync the models with the database
  sequelize.sync()
    .then(() => console.log('Database schema synchronized.'))
    .catch(err => console.error('Error synchronizing database schema:', err));


const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;

