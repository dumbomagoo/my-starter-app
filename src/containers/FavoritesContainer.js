import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Favorites from '../components/Favorites/Favorites';
import { update as updateFavorite } from '../actions/favoriteActions';

const mapStateToProps = state => ({
  visitorInfo: state.visitor
});

const mapDispatchToProps = dispatch => ({
  favoriteAction: bindActionCreators(updateFavorite, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);