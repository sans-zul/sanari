'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.auth_account, {});
    }
  };
  user.init({
    status : DataTypes.INTEGER,
    verified : DataTypes.INTEGER,
    name: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATEONLY,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    phone : DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'user',
  });
  return user;
};