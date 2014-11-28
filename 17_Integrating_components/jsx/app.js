/** @jsx React.DOM */

var APP = React.createClass({
  getInitialState: function getInitialState() {
    return {
      data: [ ]
    }
  },
  componentWillMount: function componentWillMount() {
    reqwest({
      url: 'http://filltext.com/?rows=10&val={randomNumber}',
      type: 'jsonp',
      success: function success(resp) {
        this.setState({ data: resp });
        this.renderChart(this.state.data);
      }.bind(this)
    });
  },
  renderChart: function renderChart(dataset) {
    d3.select('#chart').selectAll('div')
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
    return <div id="chart"></div>;
  }
});

React.renderComponent(<APP />, document.getElementById('app'));