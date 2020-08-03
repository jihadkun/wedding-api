'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  info.init({
    mempelaiPria: DataTypes.STRING,
    keluargaPria: DataTypes.STRING,
    mempelaiWanita: DataTypes.STRING,
    keluargaWanita: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    waktu: DataTypes.DATE,
    kronologiPertemuan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'info',
  });
  return info;
};