import { createApi } from 'unsplash-js';
import THEMES from './ThemeObject';

const unsplash = createApi({
  accessKey: 'CEN8svb8GoTrQ0LT-iM_ojNzinFhmnFRZcB8DE6xYqk',
});

async function getState() {
  let images = [];
  for (let i = 0; i < THEMES.length; i++) {
    await unsplash.search
      .getPhotos({
        query: THEMES[i].fetch_text,
        page: 1,
        perPage: 1,
        orientation: 'portrait',
      })
      .then((arr) => {
        images[i] = arr.response.results[0].urls.small_s3;
      });
  }

  return images;
}

export default getState;
