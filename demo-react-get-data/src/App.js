import React, { PropTypes } from 'react'

class App extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    var data = {};
    data.title = this.refs.title.value;
    data.content = this.refs.content.value;
    console.log(data);
  }
  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title" /><br/>
          <input type="text" ref="content" /><br/>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

export default App;
