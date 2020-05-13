// eslint-disable-next-line import/no-cycle
import { UsersState } from './modules/users';

export interface RootState {
  users: UsersState;
}
