const db = require('../models');
const Characters = db.Characters;
const { getCharacters, getCharacterInfo } = require('../utils/loaApi');

exports.getAllCharacters = async (data) => {
  const { user, characterName, serverName } = data;
  const apiKey = user.api_key;

  const characters = await getCharacters(characterName, apiKey);

  // 서버 필터링
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

  // 캐릭터 데이터 저장 로직 추가
  const characterEntities = charactersData.map((char) => ({
    nickName: char.CharacterName,
    className: char.CharacterClassName,
    level: char.ItemAvgLevel.toString(),
    expLevel: char.CharacterLevel, // 정수 레벨로 저장
    serverName: char.ServerName,
    userId: user.id,
    characterImage: char.CharacterImage,
    combatPower: char.CombatPower.toString(), // 문자열로 저장
  }));

  await Characters.bulkCreate(characterEntities);

  console.log('Characters saved:', characterEntities);
  return charactersData;
};
