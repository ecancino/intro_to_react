/** @jsx React.DOM */
var Site = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
      pages: [
        {
          'title': 'Home',
          'features': [
            {
              title: 'Home feature',
              active: false
            },
            {
              title: 'Something else',
              active: false
            },
            {
              title: 'Home Things!',
              active: false
            }
          ]
        },
        {
          'title': 'About',
          'features': [
            {
              title: 'About feature',
              active: false
            },
            {
              title: 'This is about!',
              active: false
            },
            {
              title: 'About Stuff',
              active: false
            }
          ]
        },
        {
          'title': 'Contact',
          'features': [
            {
              title: 'By Email',
              active: false
            },
            {
              title: 'By Phone',
              active: false
            },
            {
              title: 'By Telepathy',
              active: false
            }
          ]
        }
      ]
    }
  },
  pageUpdate: function(index) {
    this.setState({page: index});
  },
  featureUpdate: function(index, e) {
    e.preventDefault();
    var pages = this.state.pages;
    pages[this.state.page].features[index].active = !pages[this.state.page].features[index].active;
    this.setState({pages:pages});
  },
  render: function() {
    var title = this.state.pages[this.state.page].title;
    return (
        <Container>
          <Nav pages={this.state.pages.map(function(i){return i.title})}
            update={this.pageUpdate} page={title} />
          <Lead title={title.toUpperCase()} />
          <Row>
            {
              this.state.pages[this.state.page].features.map(function(f, i) {
                var featureUpdate = this.featureUpdate.bind(null,i)
                return (
                  <Feature key={i} title={f.title} active={f.active} update={featureUpdate} />
                );
              }.bind(this))
            }
          </Row>
          <Footer />
        </Container>
      )
  }
});
