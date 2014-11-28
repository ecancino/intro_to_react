/** @jsx React.DOM */
var Footer = React.createClass({
  shouldComponentUpdate: function() {
    return false;
  },
  render: function() {
    return (
      <div className="footer">
        <p>&copy; Company</p>
      </div>
    );
  }
});
