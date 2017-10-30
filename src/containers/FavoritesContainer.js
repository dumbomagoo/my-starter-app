import { connect } from 'react-redux';
import Favorites from '../components/Favorites/Favorites';

const mapStateToProps = state => ({
  visitorInfo: state.visitor
});

export default connect(
  mapStateToProps
)(Favorites);