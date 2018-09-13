import React from "react";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ml-lg">
        <h2 className="text-success ">Get the list of locks</h2>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Submit"
          onClick={() => this.props.dispatchAction("getlocks", 0, -1, 0)}
        >
          Generate
        </Button>

        <br />
      </div>
    );
  }
}
export default Home;
