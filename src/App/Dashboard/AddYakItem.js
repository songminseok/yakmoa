import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import ListItemText from '@material-ui/core/ListItemText';
import InputAdornment from '@material-ui/core/InputAdornment';

import pillsImage from '../../assets/pills.jpg';

import { useDispatch } from 'react-redux';
import { addYak } from '../../store/yak/actions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '0 auto',
  },
  image: {
    width: '200px',
    height: '200px',
    '&:hover': {
      backgroundColor: 'rgba(182,182,182,0.2)',
    },
  },
}));

export default function AddYakItem() {
  const [yak, setYak] = React.useState({ name: 'Unknown', period: 3 });
  const classes = useStyles();
  const dispatch = useDispatch();
  const addItem = React.useCallback(
    () => dispatch(addYak.actions.addYakRequested(yak)),
    [dispatch, yak]
  );

  const [open, setOpen] = React.useState(false);
  const [pic, setPic] = React.useState({ file: null, previewUrl: pillsImage });
  const pickerEl = React.useRef(null);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handlePickImage(e) {
    const file = pickerEl.current.files[0];
    console.log('Picked Image ', file);

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log('previewUrl', fileReader.result);
      setPic({ file: file, previewUrl: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  }

  function handleOpenImagePicker(e) {
    console.log('handleOpenImagePicker', e.target, pickerEl.current);
    pickerEl.current.click();
  }

  function handleAdd() {
    // add image to store
    // upload(pic.file);
    addItem();
  }

  function handleChange(e) {
    console.log('handleChange', e.target.name, e.target.value);
    setYak({ ...yak, [e.target.name]: e.target.value });
  }

  return (
    <span>
      <Button onClick={handleOpen}>+Add</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Yak</DialogTitle>
        <List>
          <ListItem>
            <Button className={classes.button} onClick={handleOpenImagePicker}>
              <input
                ref={pickerEl}
                style={{ display: 'none' }}
                type='file'
                accept='image/*'
                onChange={handlePickImage}
              />
              <img
                className={classes.image}
                src={pic.previewUrl}
                alt='Upload'
              />
            </Button>
          </ListItem>
          <ListItem>
            <form>
              <TextField
                label='약 이름'
                margin='normal'
                name='name'
                value={yak.name}
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label='하루 복용횟수'
                name='period'
                value={yak.period}
                margin='normal'
                fullWidth
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end' style={{ width: '60px' }}>
                      회/일
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary='약 추가' onClick={handleAdd} />
          </ListItem>
        </List>
      </Dialog>
    </span>
  );
}
