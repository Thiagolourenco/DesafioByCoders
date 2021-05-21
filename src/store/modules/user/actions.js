export function LoginRequest(email, password) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {email, password},
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
