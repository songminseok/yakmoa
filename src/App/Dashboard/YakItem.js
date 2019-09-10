import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export default function YakItem({ yak }) {
  return (
    <Paper style={{ margin: '10px' }}>
      <Typography variant='h6'>{yak.name}</Typography>
      <Typography variant='body1'>{yak.period}회 복용</Typography>
    </Paper>
  );
}
