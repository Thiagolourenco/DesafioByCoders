export function LoginSuccess(data) {
  return {
    type: '@login/LOGIN_SUCCESS',
    payload: {data},
  };
}

export function Logout() {
  return {
    type: '@login/LOGOUT',
  };
}
