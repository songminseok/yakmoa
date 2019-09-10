import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddAlarmRounded';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

export default function AddYakItem() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAdd() {
    console.log('add yak item');
  }

  return (
    <span>
      <Button onClick={handleOpen}>+Add</Button>
      {/* <Dialog
        onClose={handleClose}
        aria-labelledby='dialog-add-yak-item'
        open={open}
      >
        <DialogTitle id='dialog-add-yak-item'>Add Yak Item</DialogTitle>
        <TextField
          id='yak-name'
          label='Name'
          // className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin='normal'
        />
        <List>
          <ListItem button onClick={handleAdd}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='약 추가' />
          </ListItem>
        </List>
      </Dialog> */}
    </span>
  );
}
