import { connect } from 'react-redux';
import _ from 'lodash';

import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  name: _.get(state, 'visitor.name', '')
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);