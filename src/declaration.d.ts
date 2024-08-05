declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'auth/LoginPage';
declare module 'auth/SignupPage';
declare module 'auth/useAuth';
declare module 'auth/UserStatusBar';
declare module 'auth/PrivateRoute';
