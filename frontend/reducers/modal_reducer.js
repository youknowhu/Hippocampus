import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const initialModalState = {
  modalType: null
};

export default function (state = initialModalState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_MODAL:
      return action.modalType;
    case HIDE_MODAL:
      return initialModalState;
    default:
      return state;
  }

  return newState;
}
