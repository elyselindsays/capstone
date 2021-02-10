'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    title: DataTypes.STRING,
    journalId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Page.associate = function (models) {
    Page.hasMany(models.ListItem, { foreignKey: 'pageId' });
    Page.belongsTo(models.Journal, { foreignKey: 'journalId' });
    Page.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Page;
};