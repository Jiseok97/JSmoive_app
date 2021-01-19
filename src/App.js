import react from "react";
import axios from "axios";
import Movie from "./Moive";

class App extends react.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    // async는 이 함수가 비동기라는 것을 선언 await를 기다려야 한다.
    // awiat 뒤에 있는 axios가 끝날 때 까지 기다려야 한다.
    const {
      // 가져온 요소 중 data 안에 data 안에 movies를 가져옴
      data: {
        data: { moives },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // yts.lt 에서 API 가져옴
    this.setState({ moives, isLoading: false }); // state movies : axios moives
  };
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state; // isLoading을 호출할 때, 앞에 this.state 생략을 위함
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
