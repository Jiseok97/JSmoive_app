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
    // async는 이 함수가 비동기라는 것을 선언 await를 기다려야 한다.
    // awiat 뒤에 있는 axios가 끝날 때 까지 기다려야 한다.
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); // yts.lt 에서 API 가져옴
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
