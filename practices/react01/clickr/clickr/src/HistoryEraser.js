import React, {PureComponent} from 'react'


class HistoryEraser extends PureComponent {
  constructor() {
    super()
    this.state = {
      historyStillExists: true,
      apple: "banana"
    }
    this.maybeEraseHistory = this.maybeEraseHistory.bind(this);
    // every time we call this.maybeEraseHistory from anywhere it will
    // run the one below.
  }

  maybeEraseHistory(clickCount) {
    if (clickCount >= 4 ) {
      this.setState( {historyStillExists: false})
    }
  }

  render() {
          console.log(this)
    return(

        <div>
          <p>History Still Exists?</p>
          <p>{this.state.apple} </p>
          {this.state.historyStillExists ? <h1>Yes</h1> : <h1>No</h1> }
          <h2>{this.state.apple}</h2>
          // can you have if statements in here? looks like you can't do somments...

        </div>
    )

  }

} // end of bhistory eraser class

export default HistoryEraser
