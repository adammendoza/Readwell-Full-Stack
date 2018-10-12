import { connect } from 'react-redux';
import Layout from './layout';

const mapStateTopProps = ({session , entities}) => {
  return {
      currentUser: entities.users[session.id]
  };
};



export default connect(mapStateTopProps)(Layout);
