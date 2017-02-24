module.exports = function(sequelize, DataTypes) {
var burger = sequelize.define("burger", {
  id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
   },
  burger_name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    allowNull:false
  },
  date: {
    type: DataTypes.DATE,
    default: sequelize.fn('Now')
  }
  });


// Export the database functions for the controller (catsController.js).
return burger;
};