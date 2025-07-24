'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // 자동 증가 ID
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      api_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      userStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      mainCharacterId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'main_character_id',
      },
    },
    {
      tableName: 'users',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: true,
    }
  );

  // 연관관계 정의
  User.associate = function (models) {
    // 대표 캐릭터 (ManyToOne)
    User.belongsTo(models.Characters, {
      foreignKey: 'mainCharacterId',
      as: 'mainCharacter',
    });

    // 보유 캐릭터 리스트 (OneToMany)
    User.hasMany(models.Characters, {
      foreignKey: 'userId',
      as: 'charactersList',
    });
  };

  return User;
};
