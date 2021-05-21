import produce from 'immer';

const INITIAL_STATTE = {
  loading: false,
  user: {},
};

export default function user(state = INITIAL_STATTE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@login/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@login/LOGIN_SUCCESS': {
        draft.loading = false;
        draft.user = action.payload.data;
        break;
      }

      case '@login/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
