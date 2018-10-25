import { connect } from 'react-redux';
import { selectIsFetchingClaimListMine, selectMyClaimsWithoutChannels } from 'lbry-redux';
import { doNavigate } from 'redux/actions/navigation';
import { doCheckPendingPublishes } from 'redux/actions/publish';
import FileListPublished from './view';

const select = state => ({
  claims: selectMyClaimsWithoutChannels(state),
  fetching: selectIsFetchingClaimListMine(state),
});

const perform = dispatch => ({
  navigate: path => dispatch(doNavigate(path)),
  checkPendingPublishes: () => dispatch(doCheckPendingPublishes()),
});

export default connect(
  select,
  perform
)(FileListPublished);
