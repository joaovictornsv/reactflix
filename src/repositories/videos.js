/* eslint-disable no-console */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(VideoObject) {
  console.log(config.URL_BACKEND);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(VideoObject),
  })
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const Answer = await serverAnswer.json();
        return Answer;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};
