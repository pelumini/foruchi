import { Login } from 'pages';
import { reducer, screen } from 'shared/utils/test-utils';

describe('Login Form', () => {
  let signInButton = null;

  beforeEach(() => {
    reducer(<Login />);
    signInButton = screen.getByRole('button', { name: /login/i });
  });

  test('The login button should be in the document', () => {
    expect(signInButton);
  });

  test('The login button should initially be disabled', () => {
    expect(signInButton).toBeDisabled();
  });
});
