import { connect } from 'react-redux';
import Saves from './saves';
import { createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = state => ({
  saveUsers: state.entities.saveUsers || {},
  currentUser: state.session.currentUser || {},
});


const mapDispatchToProps = dispatch => ({
  createSave: save => dispatch(createSave(save)),
  deleteSave: id => dispatch(deleteSave(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Saves);
