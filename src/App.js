import react from "react";
import PropTypes from "prop-types";
// PropTypes를 통해 props 체크

class App extends react.Component {
  state = {
    count: 0,
  };
  add = () => {};
  minus = () => {};
  render() {
    // react.component는 retrun 을 사용 x
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
