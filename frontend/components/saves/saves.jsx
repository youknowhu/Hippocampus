import React from 'react';

class Saves extends React.Component {
  constructor(props) {
    super(props);

  }

  addSave(userId) {
    this.props.createSave({
      listingId: this.props.listingId,
      userId
    })
  }

  removeSave(saveId) {
    this.props.deleteSave(saveId)
  }



  render() {
    const { currentUser, currentUserSave } = this.props;

    if (!currentUser.id) {
      return ( <div> </div> );
    }

    if (currentUserSave.id) {
      return (
        <button
          id="listing-save"
          className="saved"
          onClick={() => this.removeSave(currentUserSave.id)}
          >
          <i className="fa fa-heart"> </i> Saved
        </button>
      )
    }


    return (
      <button
        id="listing-save"
        onClick={() => this.addSave(currentUser.id)}
        >
        <i className="fa fa-heart"> </i> Save
      </button>
    )
  }
}

export default Saves;
