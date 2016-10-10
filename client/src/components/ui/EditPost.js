import React, { PropTypes } from 'react';
import axios from 'axios';

class EditPost extends React.Component {
  constructor(){
    super();
    this.state={
      post:{}
    }
  }
  componentDidMount(){
    var id = this.props.params.id;
    console.log(id);
    // axios.get('http://localhost:3000/post')
  }
  render () {
    return (
      <div>EditPost</div>
    )
  }
}

export default EditPost;
