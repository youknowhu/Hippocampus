import * as APIUtil from '../util/save_api_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const REMOVE_SAVE = 'REMOVE_SAVE';

const receiveSave = save => ({
  type: RECEIVE_SAVE,
  save,
});

const removeSave = saveId => ({
  type: REMOVE_SAVE,
  saveId,
});


export const createSave = saveParams => dispatch =>  (
  APIUtil.createSave(saveParams).then(
    save => dispatch(receiveSave(save))
  )
);

export const deleteSave = id => dispatch => (
  APIUtil.deleteSave(id).then(
    save => dispatch(removeSave(saveId))
  )
);
