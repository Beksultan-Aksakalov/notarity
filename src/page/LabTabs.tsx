import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Paper } from '@mui/material';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TablePaginationActions from "./TablePaginationActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "50px auto 50px auto",
    },
    tab: {
      backgroundColor: "white",
    },
    tabImg: {
      justifyContent: "center",
      display: "flex",
      alignItems: "center"
    }
  })
);

const LabTabs = () => {

  const classes = useStyles({});
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent={"center"} className={classes.root}>
      <TabContext value={value}>
        <Grid item lg={1} md={1} sm={1} xs={1} className={classes.tabImg}>
          <img src={process.env.PUBLIC_URL + "/icon.png"} style={{ width: 30, height: 30, textAlign: "center" }} />
        </Grid>
        <Grid item lg={11} md={11} sm={11} xs={11} className={classes.tab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="ФЛ" value="1" />
              <Tab label="ЮЛ" value="2" />
              <Tab label="ИП" value="3" />
            </TabList>
          </Box>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item lg={9} md={9} sm={9} xs={9} className={classes.tab}>
            <TabPanel value="1">
              <Paper elevation={0} >
                <TablePaginationActions />
              </Paper>
            </TabPanel>
            <TabPanel value="2">
              <Paper elevation={0} >
                <TablePaginationActions />
              </Paper>
            </TabPanel>
            <TabPanel value="3">
              <Paper elevation={0} >
                <TablePaginationActions />
              </Paper>
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </Grid>);
}

export default LabTabs;