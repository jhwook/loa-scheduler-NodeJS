const db = require('../models');
const Characters = db.Characters;
const { getCharacters, getCharacterInfo } = require('../utils/loaApi');

exports.getAllCharacters = async (data) => {
  const { user, characterName, serverName } = data;
  const apiKey = user.api_key;

  const characters = await getCharacters(characterName, apiKey);

  const filtered = characters.filter(
    (character) => character.ServerName === serverName
  );

  console.log('Characters from service:', filtered);
};

exports.saveCharacters = async (data) => {
  const { user, characterNameList } = data;
  const apiKey = user.api_key;

  const charactersData = await Promise.all(
    characterNameList.map((characterName) =>
      getCharacterInfo(characterName, apiKey)
    )
  );

  const characterEntities = charactersData.map((char) => ({
    nickName: char.CharacterName,
    className: char.CharacterClassName,
    level: char.ItemAvgLevel.toString(),
    expLevel: char.CharacterLevel,
    serverName: char.ServerName,
    userId: user.id,
    characterImage: char.CharacterImage,
    combatPower: char.CombatPower.toString(),
  }));

  await Characters.bulkCreate(characterEntities);

  console.log('Characters saved:', characterEntities);
  return charactersData;
};
