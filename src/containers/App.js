//  React
import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home';



const App = ({actions, children}) => (
  <div>
     <Home />
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
