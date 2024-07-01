import { Comic } from '../types';

const API_BASE_URL = 'https://fwd.innopolis.university/api';

export const fetchComicId = async (email: string): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/hw2?email=${email}`);
  return response.text();
};

export const fetchComicData = async (id: string): Promise<Comic> => {
  const response = await fetch(`${API_BASE_URL}/comic?id=${id}`);
  return response.json();
};

export default fetchComicData