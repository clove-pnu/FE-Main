import {
  Component, lazy, Suspense,
} from 'react';

interface State {
  hasError: boolean;
}

const LoginPage = lazy(() => import('auth/LoginPage'));

class LoginPageWrapper extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          로그인 서버에 오류가 발생했습니다. 잠시 후 시도해주세요.
        </div>
      );
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    );
  }
}

export default LoginPageWrapper;
