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
    otp : DataTypes.STRING,
    name: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATEONLY,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    foto_ktp : DataTypes.STRING,
    foto_ktp_wajah : DataTypes.STRING,
    phone : DataTypes.STRING,
    alamat : DataTypes.TEXT,
    desa : DataTypes.STRING,
    kecamatan : DataTypes.STRING,
    kota : DataTypes.STRING,
    provinsi : DataTypes.STRING,
    kode_pos : DataTypes.STRING,
    cv : DataTypes.TEXT,
    about_me : DataTypes.TEXT,
    skill : DataTypes.TEXT,
    experience : DataTypes.TEXT,
    sosial_media : DataTypes.TEXT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'user',
  });
  return user;
};