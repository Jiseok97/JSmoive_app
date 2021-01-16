import react from "react";
import PropTypes from "prop-types";
import axios from "axios";
// PropTypes를 통해 props 체크

class App extends react.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    // setTimeout(() => {
    //   // 6초 딜레이
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMoives();
  }
  render() {
    const { isLoading } = this.state; // isLoading을 호출할 때, 앞에 this.state 생략을 위함
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
