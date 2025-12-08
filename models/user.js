const { DataTypes } = require("sequelize");
const connectSequelize = require("../config/db");

const sequelizePromise = connectSequelize();

const User = sequelizePromise.then((sequelize) => {
  const userModel = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  });
  return userModel;
});

module.exports = User;
