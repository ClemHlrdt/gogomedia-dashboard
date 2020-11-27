import { createReducer, on, Action } from '@ngrx/store';
import { User } from 'src/app/auth/user.model';
import * as AuthActions from './user.actions';

export interface AuthState {
  user: User;
  authError: string;
  loading: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  authError: null,
  loading: false,
};

export const authFeatureName = 'auth';

const authReducerInternal = createReducer(
  initialAuthState,
  on(AuthActions.loginStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(AuthActions.signupStart, (state) => ({ ...state, loading: true })),
  on(
    AuthActions.authenticateSuccess,
    (state, { email, userId, token, expirationDate, redirect }) => {
      const user = new User(email, userId, token, expirationDate);
      return {
        ...state,
        authError: null,
        user: user,
        loading: false,
      };
    }
  ),
  on(AuthActions.authenticateFail, (state, { error }) => {
    return {
      ...state,
      authError: error,
      user: null,
      loading: false,
    };
  }),
  on(AuthActions.logout, (state) => ({ ...state, user: null, loading: false }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
