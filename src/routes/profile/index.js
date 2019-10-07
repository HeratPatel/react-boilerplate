import ReactHelmet from 'hocs/ReactHelmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import getDemoSelector from '../../redux/demo/selectors';
import demoAction from '../../redux/demo/actions';

const mapStateToProps = state => ({
  demo: getDemoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ demoAction }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactHelmet(Profile, 'Profile - React Boilerplate', 'Profile page'));
