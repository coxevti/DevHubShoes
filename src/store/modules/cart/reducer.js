import produce from 'immer';
import storage from 'redux-persist/lib/storage';

export default function Cart(state = [], action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        const { members } = action;
        draft.push(members);
        break;
      }
      case '@cart/REMOVE': {
        const memberIndex = draft.findIndex((m) => m.id === action.id);
        if (memberIndex >= 0) {
          draft.splice(memberIndex, 1);
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCCESS': {
        const memberIndex = draft.findIndex((m) => m.id === action.id);
        if (memberIndex >= 0) {
          draft[memberIndex].amount = Number(action.amount);
        }
        break;
      }
      case '@cart/CHECKOUT': {
        storage.removeItem('persist:devhubshoes');
        draft.map((item) => draft.splice(item, draft.length));
        break;
      }
      default:
    }
  });
}
