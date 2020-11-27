import { createAction, props } from '@ngrx/store';

// export const checkAuth = createAction('[Auth] checkAuth');

// export const checkAuthComplete = createAction(
//   '[Auth] checkAUthComplete',
//   props<{ isLoggedIn: boolean }>()
// );

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);

export const authenticateSuccess = createAction(
  '[Auth] Login',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);

export const authenticateFail = createAction(
  '[Auth] Login Fail',
  (error: string) => ({
    error,
  })
);

export const signupStart = createAction(
  '[Auth] SIGNUP_START',
  props<{ email: string; password: string }>()
);

export const clearError = createAction('[Auth] CLEAR_ERROR');

export const autoLogin = createAction('[Auth] Auto Login');

export const loginComplete = createAction(
  '[Auth] loginComplete',
  props<{ user: any; isLoggedIn: boolean }>()
);
export const logout = createAction('[Auth] logout');

export const logoutComplete = createAction('[Auth] logoutComplete');
