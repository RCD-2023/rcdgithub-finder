// types/User.ts
export type User = {
  id: number;
  login: string;
  avatar: string;
  avatar_url: string;
};
//types user props
export type UserItemProps = {
  user: User;
};
