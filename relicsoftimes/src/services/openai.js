import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
});

export const sendPrompt = async (prompt) => {
  try {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-3.5-turbo', // ou gpt-4 si tu y as accès
      messages: [{ role: 'user', content: prompt }],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erreur OpenAI:', error.response?.data || error.message);
    throw error;
  }
};
