import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Favorites from '../components/Favorites/Favorites';
import { update as updateFavorite } from '../actions/favoriteActions';
import { toggleMenu } from '../actions/menuActions';

const mapStateToProps = state => ({
  visitorInfo: state.visitor,
  menuInfo: state.menu
});

const mapDispatchToProps = dispatch => ({
  favoriteAction: bindActionCreators(updateFavorite, dispatch),
  toggleMenu: bindActionCreators(toggleMenu, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);