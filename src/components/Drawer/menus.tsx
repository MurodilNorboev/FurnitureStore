import { Box, Button, ButtonGroup, Divider, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatedButton, BtnWrap } from '../styles/navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tajriba from '../Navbar/dropdownmenus';

type Anchor =  'left'  | 'right';

export default function 
Menus_Icon() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
    sx={{width:"240px",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
  
      
      <BtnWrap style={{width:"76px"}}>
      <AnimatedButton>
      sofas
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      <BtnWrap style={{width:"88px"}}>
      <AnimatedButton>
      tables
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      <BtnWrap style={{width:"68px"}}>
      <AnimatedButton>
      beds
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      <BtnWrap style={{width:"110px"}}>
      <AnimatedButton>
      lighting
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      <BtnWrap style={{width:"100px"}}>
      <AnimatedButton>
      kitchen
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      <BtnWrap style={{width:"104px"}}>
      <AnimatedButton>
      storage
      <KeyboardArrowDownIcon className='icon' />
      </AnimatedButton>
      </BtnWrap>

      </List>



      <Divider />

    </Box>
  );

  return (
    <>
    <div>
      <ButtonGroup variant="outlined">
        {(['right'] as const).map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)} sx={{border:"none",color:"black", '@media (max-width: 500px)': {
            display:"none",
          },}}>
            <MenuIcon/>
          </Button>
        ))}
      </ButtonGroup>

      {(['right'] as const).map((anchor) => (
        <Drawer sx={{border:"1px solid red",}}
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
           
          {list(anchor)}
        </Drawer>
       
      ))}
    </div>

    <div>
<ButtonGroup variant="outlined">
  {(['left'] as const).map((anchor) => (
    <Button key={anchor} onClick={toggleDrawer(anchor, true)} sx={{border:"none",color:"black", '@media (max-width: 1500px)': {display:"none",}, '@media (max-width: 500px)': {display:"flex",},
}}>
      <MenuIcon />
    </Button>
  ))}
</ButtonGroup>

{(['left'] as const).map((anchor) => (
  <Drawer sx={{border:"1px solid red",}}
    key={anchor}
    anchor={anchor}
    open={state[anchor]}
    onClose={toggleDrawer(anchor, false)}
  >
     
    {list(anchor)}
  </Drawer>
 
))}
    </div>
</>
  );
}
 





