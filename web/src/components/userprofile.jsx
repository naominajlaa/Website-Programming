class userprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Naomi Najla",
      isOnline: false,
    };
  }

  toggleOnlineStatus = () => {
    this.setState((prevState) => ({
      isOnline: !prevState.isOnline,
    }));
  };

  render() {
    return (
      <div>
        <h3>User: {this.state.nama}</h3>
        <p>Status: {this.state.isOnline ? "Online" : "Offline"}</p>
        <button onClick={this.toggleOnlineStatus}>
          {this.state.isOnline ? "Set Offline" : "Set Online"}
        </button>
      </div>
    );
  }
}

export default userprofile;
