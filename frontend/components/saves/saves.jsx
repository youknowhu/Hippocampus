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

  removeSave(userId) {
    this.props.deleteSave({
      save: {
        listingId: this.props.listingId,
        userId
      }
    })
  }



  render() {
    const { currentUser } = this.props;
    const currentUserLiked = this.props.saveUsers.includes(currentUser.id);

    if (!currentUser.id) {
      return ( <div> </div> );
    }

    if (currentUserLiked) {
      return (
        <button
          id="listing-save"
          className="saved"
          onClick={() => this.removeSave(currentUser.id)}
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
