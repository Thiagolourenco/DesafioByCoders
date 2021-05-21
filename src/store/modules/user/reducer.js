import produce from 'immer';

const INITIAL_STATTE = {
  loading: false,
  user: {},
  error: null,
  visible: false,
};

export default function user(state = INITIAL_STATTE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@login/LOGIN_REQUEST': {
        draft.loading = true;
        draft.visible = false;
        break;
      }

      case '@login/LOGIN_SUCCESS': {
        draft.loading = false;
        draft.visible = false;
        draft.user = action.payload.data;
        break;
      }

      case '@login/LOGIN_FAILURE': {
        draft.loading = false;
        draft.visible = true;
        draft.error = action.payload.error;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
