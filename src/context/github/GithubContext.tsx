import { createContext, JSX, useReducer } from 'react';
import githubReducer from './GithubReducer';
import type {
  GithubContextType,
  GithubProviderProps,
} from '../../types/GithubContext';
//instantiate context
const GithubContext = createContext<GithubContextType>({
  users: [],
  loading: false,
  searchUsers: async (text: string) => {},
  clearUsers: () => {},
});

//
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// export context provider

export const GithubProvider = ({
  children,
}: GithubProviderProps): JSX.Element => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  //
  //Get search result (functi asociata butonului Go)
  const searchUsers = async (text: string) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    try {
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      const { items } = await response.json();
      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  //functie de stergere a paginii de cautare (asociata buton Clear)
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
