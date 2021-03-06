module.exports = function(sequelize, DataTypes) {
    let Group = sequelize.define("Group", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    Group.associate = function(models) {
      // Associating Group with Members
      // When a Group is deleted, also delete any associated Members
      Group.hasMany(models.Member, {
        onDelete: "cascade"
      });
    
      // ******  Had to comment out code below - broke members.handlebars page 

      // userId of commissioner

      // I uncommented it out, so hopefully I'm not causing problems :)
      Group.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Group;
  };
  