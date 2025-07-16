'use strict';
module.exports = (sequelize, DataTypes) => {
  const RaidCharacters = sequelize.define(
    'RaidCharacters',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      raidGroupId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'raid_group_id',
      },

      characterId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'character_id',
      },
    },
    {
      tableName: 'raid_characters',
      createdAt: 'created_at',
      updatedAt: 'modified_at',
      underscored: true,
    }
  );

  RaidCharacters.associate = function (models) {
    // ManyToOne: RaidCharacters → RaidGroup
    RaidCharacters.belongsTo(models.RaidGroup, {
      foreignKey: 'raidGroupId',
      as: 'raidGroup',
    });

    // ManyToOne: RaidCharacters → Characters
    RaidCharacters.belongsTo(models.Characters, {
      foreignKey: 'characterId',
      as: 'character',
    });
  };

  return RaidCharacters;
};
