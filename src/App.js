import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList/PostList";
import fetchData from "./functions/fetchData.js";
import ButtonBlue from "./components/ButtonBlue/ButtonBlue.js";
import SerchInput from "./components/SerchInput/SerchInput";
import Loading from "./components/Loading/Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      countPost: 10,
      serchValue: "",
      newData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetchData("posts").then(data => {
        this.setState({ data, isLoading: false, newData: data });
      });
    }, 3000);
  }

  onMoreClickHandler = () => {
    if (this.state.countPost < this.state.data.length) {
      this.setState({
        countPost: this.state.countPost + 10
      });
    }
  };

  onChangeSerchInput(event) {
    this.setState({
      serchValue: event.target.value
    });
  }

  onSerchClickHandler = (data, serchValue) => {
    let arrKeyWord = serchValue.split(" ");
    let newData = data;

    arrKeyWord.map(
      keyWord =>
        (newData = newData.filter(
          el => el.title.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
        ))
    );

    this.setState({ newData, countPost: 10 });
  };

  render() {
    return (
      <div className="App">
        <div className="Serch">
          <SerchInput
            place="serch ..."
            onChange={event => this.onChangeSerchInput(event)}
          />

          <ButtonBlue
            text="Serch"
            onClick={() =>
              this.onSerchClickHandler(this.state.data, this.state.serchValue)
            }
          />
        </div>

        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <PostList
              data={this.state.newData.slice(0, this.state.countPost)}
              countPost={this.state.countPost}
            />

            {this.state.countPost < this.state.newData.length ? (
              <ButtonBlue text="More" onClick={this.onMoreClickHandler} />
            ) : null}
          </>
        )}
      </div>
    );
  }
}

export default App;
