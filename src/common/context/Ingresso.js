import React, { createContext, useState } from 'react';

const IngressoContext = createContext();

const IngressoProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  return (
    <IngressoContext.Provider value={{formData, setFormData}}>
      {children}
    </IngressoContext.Provider>
  );
};

export { IngressoContext, IngressoProvider };
