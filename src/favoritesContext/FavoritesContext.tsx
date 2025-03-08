import React, { createContext, useContext, useState } from 'react';

interface IFavoritesContextType {
  favoriteItems: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<IFavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  const addToFavorites = (id: number) => {
    setFavoriteItems(prev => [...prev, id]);
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems(prev => prev.filter(itemId => itemId !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteItems.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('no such context 🫣');
  }
  return context;
};