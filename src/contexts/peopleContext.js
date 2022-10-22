import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';

export function createCtx() {
  const ctx = createContext(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider];
}

export const [usePeople, PeopleContextProvider] = createCtx();

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const updateStorage = useCallback((e) => {
    const { key, newValue } = e;
    if (key === 'usernames') {
      const newArr = JSON.parse(newValue);
      const newList = [...newArr];
      setPeople(newList);
    }
  }, []);

  const updatePeople = (person) => {
    const newList = [...people, person];
    setPeople(newList);
    localStorage.setItem('usernames', JSON.stringify(newList));
  };

  useEffect(() => {
    async function getPeople() {
      const peopleList = localStorage.getItem('usernames');

      if (peopleList) {
        return setPeople(JSON.parse(peopleList));
      }
      localStorage.setItem('usernames', '[]');
    }
    getPeople();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', updateStorage);
    return () => {
      window.removeEventListener('storage', updateStorage);
    };
  }, [updateStorage]);

  return (
    <PeopleContextProvider value={{ people, updatePeople }}>
      {children}
    </PeopleContextProvider>
  );
};

export default PeopleProvider;
