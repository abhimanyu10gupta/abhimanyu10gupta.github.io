import React, { Fragment, useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MyDiv = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2em',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.25em',
  },
}));

const Image = styled('img')(({ theme }) => ({
  height: '8em',
  [theme.breakpoints.down('md')]: {
    height: '7em',
  },
  [theme.breakpoints.down('sm')]: {
    height: '5.5em',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
}));

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.common.arcBlue,
      color: 'white',
      borderRadius: 0,
      '& .MuiMenuItem-root': {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
          opacity: 1,
        },
      },
      '& .Mui-selected': {
        backgroundColor: alpha(theme.palette.text.primary, 0.3),
      },
    },
  })
);

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps',
    },
    {
      name: 'Website Development',
      link: '/websites',
    },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;

      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;

      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;

      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;

      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;

      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;

      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;

      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value, selectedIndex]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        sx={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <StyledTab component={Link} to='/' label='Home' />
        {/* <StyledTab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onMouseOver={(event) => handleClick(event)}
          component={Link}
          to='/services'
          label='Services'
        /> */}
        <StyledTab component={Link} to='/projects' label='Projects' />
        <StyledTab component={Link} to='/resume' label='Resume' />
        <StyledTab component={Link} to='/contact' label='Get in Touch' />
      </Tabs>
      {/* <Button
        variant='contained'
        color='secondary'
        sx={(theme) => ({
          ...theme.typography.estimate,
          borderRadius: '50px',
          marginLeft: '50px',
          marginRight: '25px',
          height: '45px',
        })}
      >
        Free Estimate
      </Button> */}
      <StyledMenu
        id='simple-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
        {console.log(selectedIndex)}
      </StyledMenu>
    </Fragment>
  );
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            {/* <Button
              sx={{ padding: 0 }}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
              disableRipple
            >
              <Image alt='company logo' src={logo} />
            </Button> */}
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyDiv />
    </Fragment>
  );
};

export default Navbar;
