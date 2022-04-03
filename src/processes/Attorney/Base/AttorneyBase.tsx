import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, createStyles, makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { TextareaAutosize } from '@mui/material';
import { history } from '../../../core/helpers/history';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "50px"
        },
        mTextField: {
            width: "100%"
        }
    }))

export default function AttorneyBase() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate | null>();

    const handleDateChange = (date: MaterialUiPickersDate | null) => {
        setSelectedDate(date);
    };

    return <Paper elevation={3} className={classes.root}>
        <Grid container
            alignItems="center" spacing={4}>
            <Grid container direction="column" spacing={2} item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Доверитель
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="ФИО" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="ИИН" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="Место рождения" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Дата рождения"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider >
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2} item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Доверенный
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="ФИО" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="ИИН" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="Место рождения" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Дата рождения"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider >
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ width: "100%", height: "200px" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Дата заключения сделки"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider >
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                <Button variant="contained" color="primary">
                    Печатать
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button variant="contained" color="secondary" onClick={() => {
                    history.push("/attorneys")
                }}>
                    Назад
                </Button>
            </Grid>
        </Grid>
    </Paper >
}