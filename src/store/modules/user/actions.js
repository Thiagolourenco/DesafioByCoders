export function LoginSuccess(data) {
  return {
    type: '@login/LOGIN_SUCCESS',
    payload: {data},
  };
}

export function Location(region) {
  return {
    type: '@location/LOCATION',
    payload: {region},
  };
}

export function Logout() {
  return {
    type: '@login/LOGOUT',
  };
}
