import React from 'react'

class Hello extends React.Component {
  // constructor() {
  //   super() /* es6规定*/
  //   this.state = {
  //     a: 1,
  //   }
  // }
  state = {
    a: 1,
  }
  bClick = () => {
    // console.log('被点击了', e)
    this.setState({ a: this.state.a + 1 })
  }
  render() {
    return (
      <div>
        <h1>抽离Hello组件</h1>
        <p>{this.state.a}</p>
        <button onClick={this.bClick}>点击</button>
      </div>
    )
  }
}

export default Hello
