import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Avatar, Box, Card, Divider, Grid, Stack, Typography, Button } from "@mui/material";
import { Image } from "mui-image";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
}

function App() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log(checked)

  const array = [0,1,2,3];

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 5 }}>
            <Box sx={{ paddingTop: 5, px: 4 }}>
              <Image src="https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg" />
              <Stack
                direction="row"
                spacing={2}
                justifyContent={"space-between"}
                sx={{ mt: 2 }}
              >
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Todo List
                </Typography>
                <Typography variant="subtitle" sx={{ mt: 2 }}>
                  Done {checked.length}/{array.length}
                </Typography>
              </Stack>

              <List
                sx={{
                  width: "100%",
                }}
              >
                {array.map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem
                      key={value}
                      
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        
                      >
                        <MenuIcon sx={{marginRight: 2}}/>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Line item ${value + 1}`}
                        />
                      </ListItemButton>
                      <Divider />
                    </ListItem>
                  );
                })}
              </List>
              <Button variant="contained" color="primary" startIcon={<AddIcon/>} fullWidth sx={{marginBottom: 5, padding: 2, borderRadius: 3}}>Add Task</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
