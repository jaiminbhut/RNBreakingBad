import Characters from '@/networking/apis/Characters';
import { apiConfig } from '../NetworkService';

const baseURL = apiConfig();

const Apis = {
  characters: Characters(baseURL),
};

export default Apis;
