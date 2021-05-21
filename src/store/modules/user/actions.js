export function LoginRequest(email, password, navigate) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {email, password, navigate},
  };
}

export function LoginSuccess(data) {
  return {
    type: '@login/LOGIN_SUCCESS',
    payload: {data},
  };
}

export function LoginFailure(error) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {error},
  };
}
