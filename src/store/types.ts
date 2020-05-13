export interface UsersState {
  token: string;
  isLogin: boolean;
  isNetwork: boolean;
}

export interface RootState {
  users: UsersState;
}
