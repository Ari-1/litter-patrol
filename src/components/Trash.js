import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  trashItem() {
    if (this.props.isTrashVisible === true) {
      return (<img src={ TrashIcon } alt="Trash" className="trash"></img>)
    }
  }

  onPresentClick = () => {
    if (this.props.isTrashVisible === true) {
      this.props.addPoints(this.props.id)
    }
  }

  render() {

    return (
      <div onClick={this.onPresentClick} className="bin">
        { this.trashItem() }
      </div>
    );
  }
}

export default Trash;
