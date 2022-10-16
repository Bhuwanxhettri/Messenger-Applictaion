import React from 'react'
import { useContext,useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

const Header = () => {
  const {account} = useContext(AccountContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img  src={account.picture}  onClick={toggleDrawer(anchor, true)} className="p-1 cursor-pointer w-24 h-24 mx-14 rounded-full " />
      <Divider />
       <span className=' text-xl'>{account.name}</span>
    </Box>
  );
  return (
    <div>
        <div className='flex gap-24 items-center bg-slate-100 rounded-md p-2'>
            <div>
                <div>
                    {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <div className='flex gap-28 items-center'>
                           <img  src={account.picture}  onClick={toggleDrawer(anchor, true)} className="p-1 cursor-pointer w-14 h-14 rounded-full " />
                              <ChatIcon />
                              <MoreVertIcon onClick={handleClick} className="cursor-pointer"/>
                              <Menu
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                >
                                {/* <MenuItem onClick={()=>{toggleDrawer(anchor, true);handleClose();}}>Profile</MenuItem> */}
                                <MenuItem onClick={toggleDrawer(anchor, true)}>Profile</MenuItem>

                                <MenuItem onClick={handleClose}>View</MenuItem>

                            </Menu>
                      </div>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
               </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header