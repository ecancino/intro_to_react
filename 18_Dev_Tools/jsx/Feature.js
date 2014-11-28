/** @jsx React.DOM */
var Feature = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <h2>{this.props.title}</h2>
        <p>Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo.</p>
        <p><FeatureButton update={this.props.update} active={this.props.active} /></p>
      </div>
    );
  }
});
