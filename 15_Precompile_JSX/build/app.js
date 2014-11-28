/** @jsx React.DOM */
var APP = React.createClass({displayName: 'APP',
  render: function() {
    return (
      React.createElement("table", null, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "heading"), 
            React.createElement("th", null, "heading"), 
            React.createElement("th", null, "heading")
          )
        ), 
        React.createElement("tbody", null, 
          React.createElement("tr", {className: "tr"}, 
            React.createElement("td", null, 
              React.createElement("form", {action: ""}, 
                React.createElement("input", {type: "text", name: "name", value: ""})
              )
            )
          )
        )
      )
      );
    }
  });

React.renderComponent(React.createElement(APP, null), document.body);