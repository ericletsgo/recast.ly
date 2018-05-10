class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.changeVideoOnClick = this.changeVideoOnClick.bind(this);
    this.state = {
      video: undefined
    };
  };
  
  componentDidMount() {
    this.props.searchYouTube({max: 5, query: 'dog', key: YOUTUBE_API_KEY }, function(data){
      this.setState({
        video: data
      })
      //this.setState({video: data})
    }.bind(this))
    // console.log(this.props.videos)
    // this.setState({video: window.videos[0]})
    // console.log(this.state)
  }
  
  handleClick(inputValue) {
    this.props.searchYouTube({max: 5, query: inputValue, key: YOUTUBE_API_KEY }, function(data){
      this.setState({
        video: data
      })
    }.bind(this))
  }

  changeVideoOnClick(video) {
    this.setState({ video });
  };
   
  render() { 
    //console.log(this.props.videos);
    return this.state.video ? ( <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search video={this.state.video} handleClick={this.handleClick.bind(this)}  />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.video[0]} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.video} changeVideoOnClick={this.changeVideoOnClick.bind(this)} />
        </div>
      </div>
    </div>) : (<div>not re-render yet</div>)
  };
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
