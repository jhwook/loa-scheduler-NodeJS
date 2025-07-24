const characterService = require('../services/characterService');

exports.getAllCharacters = async (req, res) => {
  try {
    const user = req.user;
    const { characterName, serverName } = req.query;
    const data = characterService.getAllCharacters({
      user,
      characterName,
      serverName,
    });
    res.status(200).json({ data, message: '모든 캐릭터를 조회했습니다.' });
  } catch (err) {
    console.error('❌ 에러 발생:', err.message);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};

exports.saveCharacters = async (req, res) => {
  try {
    const user = req.user;
    const { characterNameList } = req.body;

    const data = await characterService.saveCharacters({
      user,
      characterNameList,
    });

    res.status(200).json({ data, message: '캐릭터를 저장했습니다.' });
  } catch (err) {
    console.error('❌ 에러 발생:', err.message);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};

exports.deleteCharacter = async (req, res) => {};
