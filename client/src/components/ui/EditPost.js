import React, { PropTypes } from 'react';
import axios from 'axios';
import Settings from '../../settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';

class EditPost extends React.Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      }
    };
  }
  constructor(){
    super();
    this.state={
      post:{}
    }
  }
  componentDidMount(){
    var id = this.props.params.id;
    console.log(id);
    axios.get(`${Settings.host}/post/${id}`)
    .then(res => {
      this.setState({
        post:res.data.post
      })
      console.log(res);
    })
  }
  publishPost(data){
    //REST
    var id = this.props.params.id;
    axios.put(`${Settings.host}/post/${id}`,data)
    .then(res => {
      this.context.router.push('/')
    })
  }
  render () {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        {!isEmpty(this.state.post) ? <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)} /> : ""}
      </div>
    )
  }
}

EditPost.contextTypes = {
   router: React.PropTypes.object
};

export default EditPost;
