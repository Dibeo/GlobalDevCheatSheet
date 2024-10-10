import React, { createContext, useContext, useState, ReactNode } from 'react';

// Type pour le contexte
interface GlobalContextType {
  globalVariable: string;
  setGlobalVariable: React.Dispatch<React.SetStateAction<string>>;
}

// Créer le contexte
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Fournisseur de contexte
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState<string>('Valeur par défaut');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext doit être utilisé à l\'intérieur de GlobalProvider');
  }
  return context;
};
