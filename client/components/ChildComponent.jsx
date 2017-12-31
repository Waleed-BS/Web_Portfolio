import React from 'react';

export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    const { showText } = this.state;
    return (
      <div>
        <p> Child Component </p>
        { showText ? <p> JSX </p> : ' ' }
      </div>
    );
  }
}
