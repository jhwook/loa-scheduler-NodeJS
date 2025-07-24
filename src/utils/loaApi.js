const axios = require('axios');
const { head } = require('../routes/characterRoutes');
const { response } = require('express');
const LOA_API_BASE_URL =
  process.env.LOA_API_BASE_URL || 'https://developer-lostark.game.onstove.com';

exports.getCharacters = async (characterName, apiKey) => {
  apiKey =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA0NzMzODEifQ.mcaqyCtheQ0ys2U6IF5P6l5C7wuPDgANm33JsMEsDXJkK-Sg2QEFiGARyK-fhd2w9ji0jvz-6n9jMAQXaa2F6k70jexhpt19ISIAkrcs95Mb1bzQ-elFxZ4omYtS9aGw5RJ8695N_SYk9yLIGgnkrordB7E2qeyCUdYajcv9R1IiDDZH728jPpjm_ls65P4o4ZSmiobYDeMHYNOK-XWjeNuZrcBI9JyfoSUyWGA59nLUiNwHyQCakruuz6ORbOKgwSXZp4AbRebYLHulnvqWIrCpgJe6dJVk-Gd_RsYRF6niqLVkLi9DZ6QSmmKOxzaumWaMrl4GlkJ69_-4RaO3oQ';
  try {
    const response = await axios.get(
      `${LOA_API_BASE_URL}/characters/${characterName}/siblings`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters');
  }
};

exports.getCharacterInfo = async (characterName, apiKey) => {
  apiKey =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA0NzMzODEifQ.mcaqyCtheQ0ys2U6IF5P6l5C7wuPDgANm33JsMEsDXJkK-Sg2QEFiGARyK-fhd2w9ji0jvz-6n9jMAQXaa2F6k70jexhpt19ISIAkrcs95Mb1bzQ-elFxZ4omYtS9aGw5RJ8695N_SYk9yLIGgnkrordB7E2qeyCUdYajcv9R1IiDDZH728jPpjm_ls65P4o4ZSmiobYDeMHYNOK-XWjeNuZrcBI9JyfoSUyWGA59nLUiNwHyQCakruuz6ORbOKgwSXZp4AbRebYLHulnvqWIrCpgJe6dJVk-Gd_RsYRF6niqLVkLi9DZ6QSmmKOxzaumWaMrl4GlkJ69_-4RaO3oQ';
  try {
    const response = await axios.get(
      `${LOA_API_BASE_URL}/armories/characters/${characterName}/profiles`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching character info:', error);
    throw new Error('Failed to fetch character info');
  }
};
