'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define(
    'GroupMember',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      memberId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'member_id',
      },
      groupId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'group_id',
      },
    },
    {
      tableName: 'group_member',
      createdAt: 'created_at',
      updatedAt: 'modified_at',
      underscored: true,
    }
  );

  GroupMember.associate = function (models) {
    GroupMember.belongsTo(models.User, {
      foreignKey: 'memberId',
      as: 'member',
    });

    GroupMember.belongsTo(models.GroupSpace, {
      foreignKey: 'groupId',
      as: 'groupSpace',
    });
  };

  return GroupMember;
};
