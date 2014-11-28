/** @jsx React.DOM */
var Lead = React.createClass({
  render: function() {
    return (
      <Jumbotron>
        <h1>{this.props.title}</h1>
        <p className="lead">This is the message for {this.props.title} page</p>
      </Jumbotron>
    );
  }
});
