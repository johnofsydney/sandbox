import React, { Component } from 'react';


class Subject extends Component {
  constructor(props) {
    super(props)

    props.changeTitle("blue");
    console.log(`this = ${this.props.title} (stays the same as constructor runs once)`);
  }

  handleChange(e) {
    const title = e.target.value
    this.props.changeTitle(title)
  }

  render() {
    console.log(`this = ${this.props.title} (once original, once changed)`);
    return (
      <div>

        <h3>A secondary page...</h3>
        // <p>{this.props.title}  </p>
        <input onChange={this.handleChange.bind(this)}/>

      </div>
    );
  }
}

export default Subject;
