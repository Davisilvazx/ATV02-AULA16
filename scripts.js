async function obterDetalhesFilme(idFilme) {
    const API_KEY = 'SUA_CHAVE_DE_API';
  
    const BASE_URL = 'https://api.themoviedb.org/3';
  
    const url = `${BASE_URL}/movie/${idFilme}?api_key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Erro ao obter detalhes do filme: ${response.status}`);
      }
  
      const dadosFilme = await response.json();

      console.log(`Título: ${dadosFilme.title}`);
      console.log(`Sinopse: ${dadosFilme.overview}`);
      console.log(`Gênero: ${dadosFilme.genres.map(genre => genre.name).join(', ')}`);
      console.log(`Data de lançamento: ${dadosFilme.release_date}`);
      console.log('---');
    } catch (error) {
      console.error(`Erro ao obter detalhes do filme: ${error.message}`);
    }
  }
  obterDetalhesFilme(550); 