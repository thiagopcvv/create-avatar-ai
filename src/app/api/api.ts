import axios from 'axios';

const deepAiApiKey = '1f50474b-e83d-4329-b16d-6a62526c4e21'; // Substitua com sua chave de API

export const generateImage = async (prompt: unknown) => {
  try {
    const response = await axios.post('https://api.deepai.org/api/text2img', {
      text: prompt,
    }, {
      headers: {
        'Api-Key': deepAiApiKey
      }
    });
    return response.data.output_url;
  } catch (error) {
    console.error('Erro ao gerar imagem:', error);
    throw error;
  }
};
