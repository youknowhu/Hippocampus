export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const loadModal = modalType => ({
  type: SHOW_MODAL,
  modalType
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
