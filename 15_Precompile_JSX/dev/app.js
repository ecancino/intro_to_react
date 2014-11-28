/** @jsx React.DOM */
var APP = React.createClass({
  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th>heading</th>
            <th>heading</th>
            <th>heading</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr">
            <td>
              <form action="">
                <input type="text" name="name" value="" />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      );
    }
  });

React.renderComponent(<APP />, document.body);