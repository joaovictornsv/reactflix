/* eslint-disable no-console */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  console.log(config.URL_BACKEND);
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const Answer = await serverAnswer.json();
        return Answer;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
};
