import React from "react";
import "./style.css";

class FriendCard extends Component {
  // Setting the initial state of the Counter component
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }



  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <button className="btn btn-primary" onClick={this.handleIncrement}>Click</button>
    </div>
  );
  };
};


  export default FriendCard;
