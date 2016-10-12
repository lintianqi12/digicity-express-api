import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import { Link } from 'react-router';
import Radium from 'radium';
import Settings from '../../settings';
import filter from 'lodash/fp/filter';


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      btn:{
        display:'block',
        width:'80px',
        height:'30px',
        margin:'20px auto',
        border:'2px solid rgb(255, 64, 129)',
        borderRadius:'5px',
        textDecoration:'none',
        color:'rgb(255, 64, 129)',
        textAlign:'center',
        lineHeight:'30px',
        ':hover': {
          color:'#fff',
          backgroundColor:'rgb(255, 64, 129)'
        }
      },
      btn2:{
        display:'block',
        width:'70px',
        height:'22px',
        backgroundColor:'rgb(255, 64, 129)',
        borderRadius:'11px',
        textDecoration:'none',
        color:'#fff',
        textAlign:'center',
        lineHeight:'22px',
        margin:'10px 5px',
        float:'left'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get(`${Settings.host}/posts`).then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }

  filterPosts(id) {
     const posts = filter((post) => {
       return post._id !== id
     }, this.state.posts);

     this.setState({ posts: posts })
  }
  handleClick(value){
    //REST
    axios.delete(`${Settings.host}/posts/${value}`)
    .then(res => {
       console.log('filering..!');
       this.filterPosts(value);
    })
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <Link to={`/post/${post._id}`} style={styles.btn2}>查看</Link>
          <Link to={`/post/${post._id}/edit`} style={styles.btn2}>编辑</Link>
          <Link to={''} style={styles.btn2} onClick={this.handleClick.bind(this, post._id)}>删除</Link>
        </div>
      )
    }, this.state.posts);

    return(
      <div>
        <Link to='/wirte' style={styles.btn}>写文章</Link>
        { postList }
      </div>
    );
  }
}
