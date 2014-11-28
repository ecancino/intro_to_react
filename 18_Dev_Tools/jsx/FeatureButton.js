/** @jsx React.DOM */
var FeatureButton =	React.createClass({
  click: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <a onClick={this.props.update}
        className={this.props.active && 'btn btn-primary' || 'btn btn-default'}
        href="#" role="button"> View details </a>
    );
  }
});
