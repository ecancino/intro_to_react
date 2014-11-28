/** @jsx React.DOM */
var NavPill = React.createClass({
  render: function() {
    return (
      <li className={this.props.active && 'active'}>
        <a href="#" onClick={this.props.myUpdate}>{this.props.aPage}</a>
      </li>
    );
  }
});
