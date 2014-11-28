/** @jsx React.DOM */

var APP = React.createClass({displayName: 'APP',
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.renderChart(nextProps.data);
    }
  },
  renderChart: function renderChart(dataset) {
    d3.select('#' + this.props.target).selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        return d.val * 5 + 'px';
      });
  },
  render: function render() {
    /*
    var items = this.state.data.map(function createList(item) {
      return <li>{item.val}</li>;
    });
    return <ul>{items}</ul>;
    */
    return React.createElement("div", {id: this.props.target});
  }
});

//React.renderComponent(React.createElement(APP, null), document.getElementById('app'));


/*
 reqwest({
   url: 'http://filltext.com/?rows=10&val={randomNumber}',
   type: 'jsonp',
   success: function success(resp) {
     this.setState({ data: resp });
     this.renderChart(this.state.data);
   }.bind(this)
 });
*/