import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, Button, Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removeYak } from '../../store/yak/actions';

export default function YakItem({ yak, deleteMode }) {
  const dispatch = useDispatch();
  const removeItem = React.useCallback(
    () => dispatch(removeYak.actions.removeYakRequested(yak)),
    [dispatch, yak]
  );

  function handleDelete() {
    console.log('삭제하기', yak.id);
    removeItem();
  }

  return (
    <Paper style={{ margin: '10px' }}>
      <Typography variant='h6'>{yak.name}</Typography>
      <Typography variant='body1'>{yak.period}회 복용</Typography>
      {deleteMode && (
        <>
          <Divider />
          <Button onClick={handleDelete} fullWidth style={{ color: 'red' }}>
            {' '}
            삭제하기{' '}
          </Button>
        </>
      )}
    </Paper>
  );
}
