import './flagDropdown.scss'
import UK from '../../../../assets/icons8-great-britain-35.png'
import France from '../../../../assets/icons8-france-35.png'
import Spain from '../../../../assets/icons8-spain-flag-35.png'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  {
    text:'Select Language',
    image:''
  },
  {
    text:'English',
    image: <img src={UK} alt="flag"/>
  },
  {
    text:'Spanish',
    image: <img src={Spain} alt="flag"/>
  },
  {
    text:'French',
    image: <img src={France} alt="flag"/>
  },
 
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List className='list'
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText className='round'
            secondary={options[selectedIndex].image}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 50,
          horizontal: -190,
        }}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
          <div className="menuItem">
          {option.image}{option.text}
          </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


