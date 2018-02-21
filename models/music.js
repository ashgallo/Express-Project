'use strict';
module.exports = (sequelize, DataTypes) => {
  var Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Music.associate = function(models) {
    // associations can be defined here
  };
  return Music;
};