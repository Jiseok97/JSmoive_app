import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // movie를 클릭하지 않고 주소창에 movie-detail을 쳐서 갈 경우,
      // 다시 Home으로 돌아오게 하는 기능
      history.push("/");
    }
  }
  // componentDidMount() 가 실행되기 전, render() 이 먼저 실행 됨
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <h2>{location.state.title}</h2>
          <h4>{location.state.year}</h4>
          <p>{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
