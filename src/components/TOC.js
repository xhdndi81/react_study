import React, { Component } from 'react';

class TOC extends Component {

  shouldComponentUpdate(newProps, newState) {

    console.log('===> TOC render shouldComponentUpdate');
    console.log('== newProps :', newProps.data);
    console.log('== props data :', this.props.data);

    if(this.props.data === newProps.data) {
      return false;
    } else {
      return true;
    }    
  }

  render() {

    console.log('===> TOC render');
    
    var lists = [];

    const data = this.props.data;
    let i = 0; 

    while(i < data.length) {
      lists.push(
      <li key={data[i].id}>
        <a 
          href={'/content/' + data[i].id}
          onClick={function(id, e) {
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}
        >{data[i].title}</a>
      </li>);
      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;