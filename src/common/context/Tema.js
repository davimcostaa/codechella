import React, { createContext, useState } from 'react';

const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [temaBoreal, setTema] = useState(false);

  return (
    <TemaContext.Provider value={{temaBoreal, setTema}}>
      {children}
    </TemaContext.Provider>
  );
};

export { TemaContext, TemaProvider };
