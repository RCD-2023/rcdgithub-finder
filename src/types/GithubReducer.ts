import { User } from './User';

export type GithubState = {
  users: User[];
  loading: boolean;
};

export type GithubAction =
  | { type: 'SET_LOADING' }
  | { type: 'GET_USERS'; payload: User[] }
  | { type: 'CLEAR_USERS' };
