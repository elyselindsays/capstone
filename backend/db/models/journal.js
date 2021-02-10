'use strict';
module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define('Journal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Journal.associate = function (models) {
    Journal.belongsTo(models.User, { foreignKey: 'userId' });
    Journal.hasMany(models.ListItem, { foreignKey: 'journalId' });
    Journal.hasMany(models.Page, { foreignKey: 'journalId' });

  };
  return Journal;
};