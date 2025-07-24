'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupSpace = sequelize.define(
    'GroupSpace',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      tableName: 'group_spaces',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: true,
    }
  );

  GroupSpace.associate = function (models) {
    GroupSpace.hasMany(models.RaidGroup, {
      foreignKey: 'groupSpaceId',
      as: 'raidGroups',
    });

    GroupSpace.hasMany(models.GroupMember, {
      foreignKey: 'groupId',
      as: 'members',
    });
  };

  return GroupSpace;
};
