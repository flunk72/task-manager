import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { GlobalStyles } from './global.styled';
import { createContext, useState } from 'react';

export const ImageContext = createContext(null as any);
function App() {
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
