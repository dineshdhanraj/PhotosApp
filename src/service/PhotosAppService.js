import axios from 'axios';

export default async function PhotosAppService(url) {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (Error) {
    return {ErrorMessage: 'Not Found'};
  }
}
