import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, useNavigation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (index) => {
    if ((index == 0)) {
      navigate("/patient");
    }
    else if((index == 1)){
        navigate("/doctor")
    }
    else if(index == 2){
      navigate("/test")
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Patient", "Doctor", "Test", "Reports"].map((text, index) => (
          <ListItem
            key={text}
            onClick={() => handleClick(index)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Button onClick={toggleDrawer(true)}>
          <i class="fa-solid fa-bars" style={{ fontSize: 20, padding: 10 }}></i>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        <div
          className="navbar"
          style={{
            width:"100%",
            boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
            display: "flex",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 className="text-center" style={{ fontSize: 20 }}>
            {" "}
            Pathalogy Lab
          </h4>
        </div>
      </div>
    </>
  );
}

export default Navbar;
