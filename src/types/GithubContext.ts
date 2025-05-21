import { ReactNode } from 'react';
import { User } from './User';

//
export type GithubContextType = {
  users: User[];
  loading: boolean;
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
};

export type GithubProviderProps = {
  children: ReactNode;
};
