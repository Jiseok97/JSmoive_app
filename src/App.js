import react from "react";
import PropTypes from "prop-types";
// PropTypes를 통해 props 체크

class App extends react.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      // 6초 딜레이
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state; // isLoading을 호출할 때, 앞에 this.state 생략을 위함
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
