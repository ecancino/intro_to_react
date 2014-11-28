/** @jsx React.DOM */

//found in knownTags
  <div></div>

//!found in knownTags
  <APP></APP>


//self closing tags
  <div />

//multiple nodes == returning multiple functions :(
  <div></div>
  <a></a>

//single node == returning single function :)
  <div>
    <a></a>
  </div>

//first argument == component props,functions, etc.
  <div>
    <a href="#"></a>
  </div>

//additional arguments == children
  <div>
    <a href="#">this.props.children</a>
  </div>

//React will not render unknown attributes
//to the browser without data-*
  <div notrendered="x" data-rendered="x">
    <a href="#">this.props.children</a>
  </div>

//interpreted
  <div notrendered="x" data-rendered="x">
    <a href="#" onClick={this.update}>
    {/* this is a comment */}
    this.props.children
    </a>
  </div>

//if else is no good in JSX syntax, use a ternary expression
  <div notrendered="x" data-rendered="x">
    <a href="#" onClick={this.update}>this.props.children</a>
        {i>1 ? 'More than one' : 'One'}
        {i>1 && 'More than one'}
        {/* this is a comment */}
  </a>
</div>


//inline styles
var myStyle={
  backgroundColor:'#000',
  height:10 //no need for 'px'
}
<div style={myStyle} notrendered="x" data-rendered="x">
  <a href="#" onClick={this.update}>this.props.children</a>
        {i>1 ? 'More than one' : 'One'}
        {i>1 && 'More than one'}
        {/* this is a comment */}
</a>
</div>
