import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import YakItem from './YakItem';
import AddYakItem from './AddYakItem';

const yaks = [
  { name: '타이레놀', period: 3 },
  { name: '애브빌', period: 3 },
  { name: '펜잘', period: 3 },
  { name: '여명808', period: 1 },
  { name: '모닝케아', period: 3 },
  { name: '박카스', period: 10 },
];

function Dashboard({ user }) {
  const [deleteMode, setDeleteMode] = React.useState(false);
  if (!user) {
    return <Redirect to='/' />;
  }

  function handleAdd() {
    console.log('handleAdd');
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
          <Grid key={`${yak.name}${yak.index}`} item xs={3}>
            <YakItem yak={yak} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default connect((state) => ({ user: state.user }))(Dashboard);
