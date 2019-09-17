import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import {
  addYak,
  removeYak,
  updateYak,
  fetchYaks,
  upload,
} from '../../store/yak/actions';

import YakItem from './YakItem';
import AddYakItem from './AddYakItem';

function Dashboard(props) {
  const { user, yaks, fetchYaksRequested } = props;
  const [deleteMode, setDeleteMode] = React.useState(false);
  React.useEffect(() => {
    fetchYaksRequested();
    return () => {
      console.log('Dashboard unmounted');
    };
  }, [fetchYaksRequested]);

  console.log('Dashboard', props);

  if (!user) {
    return <Redirect to='/' />;
  }

  function handleDelete() {
    setDeleteMode(!deleteMode);
  }

  return (
    <Container>
      <Box>
        {!deleteMode && <AddYakItem />}
        <Button onClick={handleDelete}>{deleteMode ? 'Done' : 'Delete'}</Button>
      </Box>
      <Grid container>
        {yaks.map((yak, index) => (
          <Grid key={`${yak.name}${index}`} item xs={3}>
            <YakItem yak={yak} deleteMode={deleteMode} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  yaks: state.yak.yaks,
  loading: state.yak.loading,
  uploading: state.yak.uploading,
  error: state.yak.error,
});

const mapDispatchToProps = {
  ...addYak.actions,
  ...removeYak.actions,
  ...updateYak.actions,
  ...fetchYaks.actions,
  ...upload.actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
