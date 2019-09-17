import { addYak, updateYak, removeYak, fetchYaks, upload } from './actions';

const initialState = {
  yaks: [],
  loading: false,
  uploading: false,
  error: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case addYak.REQUESTED:
    case updateYak.REQUESTED:
    case removeYak.REQUESTED:
    case fetchYaks.REQUESTED:
      return { ...state, loading: true, error: {} };
    case addYak.FAILED:
    case updateYak.FAILED:
    case removeYak.FAILED:
    case fetchYaks.FAILED:
      return { ...state, loading: false, error: action.payload };
    case addYak.SUCCEEDED:
      return {
        ...state,
        yaks: state.yaks.concat(action.response),
        loading: false,
      };
    case updateYak.SUCCEEDED:
      return {
        ...state,
        yaks: state.yaks.map((yak) =>
          yak.id === action.response.id ? action.response : yak
        ),
        loading: false,
      };
    case removeYak.SUCCEEDED:
      return {
        ...state,
        yaks: state.yaks.filter((yak) => yak.id !== action.response.id),
        loading: false,
      };
    case fetchYaks.SUCCEEDED:
      return { ...state, yaks: action.response, loading: false };
    case upload.REQUESTED:
      return { ...state, uploading: true, error: {} };
    case upload.FAILED:
      return { ...state, uploading: false, error: action.payload };
    case upload.SUCCEEDED:
      return { ...state, uploading: false };
    default:
      return state;
  }
}
