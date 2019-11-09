import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(Footer);
