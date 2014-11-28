/** @jsx React.DOM */
var Nav = React.createClass({
  render: function() {
    var navpills = this.props.pages.map(function(aPage, i) {
      var myUpdate = this.props.update.bind(null,i)
      return (
        <NavPill key={i} active={this.props.page===aPage} myUpdate={myUpdate} aPage={aPage} />
      );
    }.bind(this));

    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          {navpills}
        </ul>
        <h3 className="text-muted">Project name</h3>
      </div>
    );
  }
});
