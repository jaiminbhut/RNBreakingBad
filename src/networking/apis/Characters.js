import urlEndPoints from '@/networking/urlEndPoints';

const characters = (api) => () => {
  const getCharacters = () => {
    return api.get(urlEndPoints.characters);
  };

  const searchCharacters = (search) => {
    return api.get(urlEndPoints.searchCharacters + search);
  };

  const getOtherCharacters = () => {
    return api.get(urlEndPoints.otherCharacters + 3);
  };

  return {
    getCharacters,
    searchCharacters,

    getOtherCharacters,
  };
};

export default characters;
