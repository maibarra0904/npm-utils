import axios from 'axios';

export const getChatResponse = async (prompt, apiKey) => {
  if (!apiKey) {
    console.log('No has ingresado tu API Key.');
    return;
  }
  const url = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(url, {
      model: 'gpt-3.5-turbo', // Puedes cambiar el modelo si lo deseas
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
      n: 1,
      stop: null,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    return response.data.choices[0].message.content;

  } catch (error) {
    console.log(error)
    console.log('Ocurrió un error al procesar tu solicitud.');
    
  }
}