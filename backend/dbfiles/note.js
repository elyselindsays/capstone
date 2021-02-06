// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Note = sequelize.define('Note', {
//     journalId: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     text: DataTypes.TEXT
//   }, {});
//   Note.associate = function (models) {
//     Note.belongsTo(models.Journal, { foreignKey: 'journalId' })
//   };
//   return Note;
// };