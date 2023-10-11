import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { GlobalStyles } from './global.styled';
import { createContext, useState } from 'react';
import { data } from './data/data';
import { useStorageQuery } from './storage';

export const ImageContext = createContext(null as any);

function App() {
  const { data: cachedData } = useStorageQuery('user', [data.user]);
  console.log(cachedData);
  const [background, setBackground] = useState(null);

  return (
    <ImageContext.Provider value={{ setBackground }}>
      <BrowserRouter>
        <Layout />
        <GlobalStyles img={background} />
      </BrowserRouter>
    </ImageContext.Provider>
  );
}

export default App;
