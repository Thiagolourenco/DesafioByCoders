import produce from 'immer';

const INITIAL_STATTE = {
  loading: false,
  user: {},
  error: null,
  visible: false,
  region: {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 0,
    longitude: 0,
  },
};

export default function user(state = INITIAL_STATTE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@login/LOGIN_SUCCESS': {
        draft.loading = false;
        draft.visible = false;
        draft.user = action.payload.data;
        break;
      }

      case '@location/LOCATION': {
        draft.region = action.payload.region;
        break;
      }

      case '@login/LOGOUT': {
        draft.loading = false;
        draft.user = null;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
