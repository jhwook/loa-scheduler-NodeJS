'use strict';
module.exports = (sequelize, DataTypes) => {
  const Characters = sequelize.define(
    'Characters',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      nickName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      className: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      level: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      exp_level: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      serverName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      userId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'user_id',
      },
    },
    {
      tableName: 'characters',
      createdAt: 'created_at',
      updatedAt: 'modified_at',
      underscored: true, // snake_case 컬럼명
    }
  );

  Characters.associate = function (models) {
    // 캐릭터는 유저에 속함 (ManyToOne)
    Characters.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    // 캐릭터는 여러 RaidCharacters를 가짐 (OneToMany)
    Characters.hasMany(models.RaidCharacters, {
      foreignKey: 'characterId',
      as: 'raidCharacters',
    });
  };

  return Characters;
};
