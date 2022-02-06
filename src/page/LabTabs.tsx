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
      margin: "50px auto 50px auto",
    },
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ФЛ" value="1" />
            <Tab label="ЮЛ" value="2" />
            <Tab label="ИП" value="3" />
          </TabList>
        </Box>
        <Grid container justifyContent={"center"}>

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
      </TabContext>
    </Grid>);
}

export default LabTabs;