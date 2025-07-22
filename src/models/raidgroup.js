'use strict';
module.exports = (sequelize, DataTypes) => {
  const RaidGroup = sequelize.define(
    'RaidGroup',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      day: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      raidTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      raidName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      groupSpaceId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'group_space_id',
      },
    },
    {
      tableName: 'raid_groups',
      createdAt: 'created_at',
      updatedAt: 'modified_at',
      underscored: true,
    }
  );
  ////////////
  RaidGroup.associate = function (models) {
    // OneToMany: RaidGroup → RaidCharacters
    RaidGroup.hasMany(models.RaidCharacters, {
      foreignKey: 'raidGroupId',
      as: 'characters',
    });

    // ManyToOne: RaidGroup → GroupSpace
    RaidGroup.belongsTo(models.GroupSpace, {
      foreignKey: 'groupSpaceId',
      as: 'groupSpace',
    });
  };

  return RaidGroup;
};
