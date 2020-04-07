
  module.exports = function(sequelize, DataTypes) {
    var Book= sequelize.define("Book", {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      comment: DataTypes.TEXT
    });
    return Book;
  };