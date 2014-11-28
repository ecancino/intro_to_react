/** @jsx React.DOM */
var PersonTable = React.createClass({
  getInitialState: function() {
    return {
      data:
        [
          {'id': 1, 'fname': 'Manish', 'lname': 'Crosswhite'},
          {'id': 2, 'fname': 'Atul', 'lname': 'Groll'},
          {'id': 3, 'fname': 'Jitender', 'lname': 'Symes'},
          {'id': 4, 'fname': 'Eva', 'lname': 'Fox'},
          {'id': 5, 'fname': 'Haidi', 'lname': 'Szymanski'},
          {'id': 6, 'fname': 'Mir', 'lname': 'Burkholder'},
          {'id': 7, 'fname': 'Deanna', 'lname': 'Black'},
          {'id': 8, 'fname': 'Arlene', 'lname': 'Wing'},
          {'id': 9, 'fname': 'Debra', 'lname': 'Mitchell'},
          {'id': 10, 'fname': 'Guy', 'lname': 'Gardenhour'},
          {'id': 11, 'fname': 'Tilena', 'lname': 'Dauk'},
          {'id': 12, 'fname': 'Crystal', 'lname': 'Hess'},
          {'id': 13, 'fname': 'Aminata', 'lname': 'Lawrence'},
          {'id': 14, 'fname': 'Roosevelt', 'lname': 'Mitu'},
          {'id': 15, 'fname': 'Eugene', 'lname': 'Ripley'},
          {'id': 16, 'fname': 'Cavanaugh', 'lname': 'Hunt'},
          {'id': 17, 'fname': 'Araceli', 'lname': 'Rose'},
          {'id': 18, 'fname': 'Lola', 'lname': 'Cobb'},
          {'id': 19, 'fname': 'Veronica', 'lname': 'Griffeeney'},
          {'id': 20, 'fname': 'Bern', 'lname': 'Gunter'},
          {'id': 21, 'fname': 'Tracy', 'lname': 'Kasprzak'},
          {'id': 22, 'fname': 'Bartley', 'lname': 'Bright'},
          {'id': 23, 'fname': 'Bruce', 'lname': 'Longmire'},
          {'id': 24, 'fname': 'Furdella', 'lname': 'Kirchner'},
          {'id': 25, 'fname': 'Kerry', 'lname': 'Lakritz'},
          {'id': 26, 'fname': 'Jonathan', 'lname': 'Mooney'},
          {'id': 27, 'fname': 'Maly', 'lname': 'Lawrence'},
          {'id': 28, 'fname': 'Ken', 'lname': 'Bario'},
          {'id': 29, 'fname': 'Arif', 'lname': 'North'},
          {'id': 30, 'fname': 'Lorraine', 'lname': 'Shaw'},
          {'id': 31, 'fname': 'Benjamin', 'lname': 'Laiuppa'},
          {'id': 32, 'fname': 'Raymond', 'lname': 'Bussey'},
          {'id': 33, 'fname': 'Karen', 'lname': 'Nordby'},
          {'id': 34, 'fname': 'Minhajuddin', 'lname': 'Proia'},
          {'id': 35, 'fname': 'Sandeep', 'lname': 'Bailey'},
          {'id': 36, 'fname': 'Ophelia', 'lname': 'Carter'},
          {'id': 37, 'fname': 'Sunghoon', 'lname': 'Pies'},
          {'id': 38, 'fname': 'Cecilia', 'lname': 'Klein'},
          {'id': 39, 'fname': 'Ghassan', 'lname': 'Culin'},
          {'id': 40, 'fname': 'May', 'lname': 'Wallach'},
          {'id': 41, 'fname': 'Milanka', 'lname': 'Coates'},
          {'id': 42, 'fname': 'Jaroslava', 'lname': 'Chandrasekahran'},
          {'id': 43, 'fname': 'Sudershan', 'lname': 'Marrinson'},
          {'id': 44, 'fname': 'Adom', 'lname': 'Nabors'},
          {'id': 45, 'fname': 'Alice', 'lname': 'Bogenschneider'},
          {'id': 46, 'fname': 'Rosie', 'lname': 'Sundell'},
          {'id': 47, 'fname': 'Liset', 'lname': 'Carlston'},
          {'id': 48, 'fname': 'Soledad', 'lname': 'Rovito'},
          {'id': 49, 'fname': 'Janine', 'lname': 'Mahan'},
          {'id': 50, 'fname': 'Hae-Yong', 'lname': 'Klug'},
          {'id': 51, 'fname': 'Wan-Yu', 'lname': 'Humphrey'},
          {'id': 52, 'fname': 'Frank', 'lname': 'Albers'},
          {'id': 53, 'fname': 'Matthew', 'lname': 'Sewell'},
          {'id': 54, 'fname': 'Vanita', 'lname': 'Antunes'},
          {'id': 55, 'fname': 'Bernadette', 'lname': 'Royer'},
          {'id': 56, 'fname': 'Waleska', 'lname': 'Reyes'},
          {'id': 57, 'fname': 'Amela', 'lname': 'Gulotta'},
          {'id': 58, 'fname': 'Anuraag', 'lname': 'Campos'},
          {'id': 59, 'fname': 'Marlene', 'lname': 'Obara'},
          {'id': 60, 'fname': 'Christine', 'lname': 'Allen'},
          {'id': 61, 'fname': 'Ollie', 'lname': 'Teti'},
          {'id': 62, 'fname': 'Natalie', 'lname': 'Aunkst'},
          {'id': 63, 'fname': 'Effram', 'lname': 'Loehfelm'},
          {'id': 64, 'fname': 'Qazzafi', 'lname': 'Traficante'},
          {'id': 65, 'fname': 'Bettye', 'lname': 'Eckhart'},
          {'id': 66, 'fname': 'Meera', 'lname': 'Masimore'},
          {'id': 67, 'fname': 'Heather', 'lname': 'Mahajan'},
          {'id': 68, 'fname': 'Luzinda', 'lname': 'Chaudary'},
          {'id': 69, 'fname': 'Abraham', 'lname': 'Ramos'},
          {'id': 70, 'fname': 'Maegan', 'lname': 'Keltner'},
          {'id': 71, 'fname': 'Sara', 'lname': 'Miyaki'},
          {'id': 72, 'fname': 'Charlie', 'lname': 'Bullock'},
          {'id': 73, 'fname': 'Wei', 'lname': 'Poole'},
          {'id': 74, 'fname': 'Grace', 'lname': 'Reddy'},
          {'id': 75, 'fname': 'Yvette', 'lname': 'Darnley'},
          {'id': 76, 'fname': 'Suini', 'lname': 'Chacon'},
          {'id': 77, 'fname': 'Brian', 'lname': 'Brewer'},
          {'id': 78, 'fname': 'Carolyn', 'lname': 'Stallings'},
          {'id': 79, 'fname': 'Wendy', 'lname': 'Bachmeier'},
          {'id': 80, 'fname': 'Jennifer', 'lname': 'Kaiser'},
          {'id': 81, 'fname': 'Coralas', 'lname': 'Loban'},
          {'id': 82, 'fname': 'Cayla', 'lname': 'Christopher'},
          {'id': 83, 'fname': 'Tobias', 'lname': 'Mcdow'},
          {'id': 84, 'fname': 'Marisa', 'lname': 'Bartleson'},
          {'id': 85, 'fname': 'Jeannine', 'lname': 'Kuhl'},
          {'id': 86, 'fname': 'Melanciaa', 'lname': 'Ford'},
          {'id': 87, 'fname': 'Anwar', 'lname': 'Tatum'},
          {'id': 88, 'fname': 'Angelo', 'lname': 'Badertscher'},
          {'id': 89, 'fname': 'Yolunda', 'lname': 'Siegel'},
          {'id': 90, 'fname': 'Melinda', 'lname': 'Callahan'},
          {'id': 91, 'fname': 'Christa', 'lname': 'Tippetts'},
          {'id': 92, 'fname': 'Kola', 'lname': 'Schlottman'},
          {'id': 93, 'fname': 'Nishal', 'lname': 'Jayn'},
          {'id': 94, 'fname': 'Tinesa', 'lname': 'Hampton'},
          {'id': 95, 'fname': 'Lakshmi', 'lname': 'Dubrow'},
          {'id': 96, 'fname': 'Yiming', 'lname': 'Duffy'},
          {'id': 97, 'fname': 'Diane', 'lname': 'Clay'},
          {'id': 98, 'fname': 'Tijana', 'lname': 'Gerela'},
          {'id': 99, 'fname': 'Han', 'lname': 'Peszynski'},
          {'id': 100, 'fname': 'Irina', 'lname': 'Connor'}
        ]
      }
    },
    render:function(){
      return (
        <table class='table table-condensed'>
          {
            this.state.data.map(function(person,i) {
              return <PersonRow key={i} data={person} />
            })
          }
        </table>
        )
    }
});

var PersonRow = React.createClass({
  render: function() {
    return (
      <tr key={0}>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    );
  }
});