'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingLot = sequelize.define('ParkingLot', {
    journalId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    car: DataTypes.STRING
  }, {});
  ParkingLot.associate = function (models) {
    ParkingLot.belongsTo(models.Journal, { foreignKey: 'journalId' });
    ParkingLot.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ParkingLot;
};