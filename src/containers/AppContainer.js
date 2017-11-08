import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import changeName from '../actions/changeNameAction';
import { toggleMenu } from '../actions/menuActions';
import App from '../components/App/App';

const mapStateToProps = state => ({
  visitorInfo: state.visitor,
  menuInfo: state.menu
});

const mapDispatchToProps = dispatch => ({
  changeName: bindActionCreators(changeName, dispatch),
  toggleMenu: bindActionCreators(toggleMenu, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);