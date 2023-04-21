import { useEffect, useState } from 'react';
import { Movie } from "./types/Movie";
import './App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMovies();
  }, []);
  
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
      })
      .catch((e) => {
        setLoading(false);
        setMovies([]);
        console.error(e);
      })
  } 

  // const loadMovies = async () => {
  //   try {
  //     setLoading(true);
  //     let response = await fetch('https://api.b7web.com.br/cinema/');
  //     let json = await response.json();
  //     setLoading(false);
  //     setMovies(json);
  //   } catch(e) {
  //     setLoading(false);
  //     setMovies([]);
  //     console.error(e);
  //   }
  // }

  return (
    <div className="App">
      {loading && 
        <div>Carregando...</div>
      }

      {!loading && movies.length > 0 &&
        <>
          <h2>Total de Filmes: {movies.length}</h2>
          <div>
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} />
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      }

      {!loading && movies.length === 0 && 
        <div>Tente novamente mais tarde.</div>
      }

    </div>

  )
}

export default App
