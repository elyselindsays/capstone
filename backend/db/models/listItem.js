'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListItem = sequelize.define('ListItem', {
    text: DataTypes.TEXT,
    pageId: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    journalId: DataTypes.INTEGER,

  }, {});
  ListItem.associate = function (models) {
    ListItem.belongsTo(models.Journal, { foreignKey: 'journalId' });
    ListItem.belongsTo(models.Page, { foreignKey: 'pageId' });
    ListItem.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ListItem;
};