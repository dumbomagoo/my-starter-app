import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import changeName from '../actions/changeNameAction';

import App from '../components/App/App';

const mapStateToProps = state => ({
  visitorInfo: state.visitor
});

const mapDispatchToProps = dispatch => ({
  changeName: bindActionCreators(changeName, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);