import React, { useEffect, useState } from 'react';
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
import { Autocomplete, TextareaAutosize } from '@mui/material';
import { MinorPerson, typeAttorney } from './models';
import { history } from '../../core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "50px"
        },
        mTextField: {
            width: "100%"
        },
        minorContent: {
            paddingBottom: "10px"
        },
        majorContent: {
            paddingBottom: "10px"
        },
        textAreaContent: {
            padding: "25px 0 25px 0"
        },
        autocomplete: {
            paddingTop: "20px"
        },
        hr: {
            width: "100%",
            padding: "1px",
            backgroundColor: "#4287f5"
        }
    }))

export default function Attorney() {
    const classes = useStyles();
    const [majorLastname, setMajorLastname] = useState("");
    const [majorFirstname, setMajorFirstname] = useState("");
    const [majorMiddlename, setMajorMiddlename] = useState("");
    const [majorIinBin, setMajorIinBin] = useState("");
    const [majorBirthDate, setMajorBirthDate] = useState<MaterialUiPickersDate | null>();
    const [majorBirthPlace, setMajorBirthPlace] = useState("");
    const [majorPlaceOfResidence, setMajorPlaceOfResidence] = useState("");

    const [minorLastname, setMinorLastname] = useState("");
    const [minorFirstname, setMinorFirstname] = useState("");
    const [minorMiddlename, setMinorMiddlename] = useState("");
    const [minorIinBin, setMinorIinBin] = useState("");
    const [minorBirthDate, setMinorBirthDate] = useState<MaterialUiPickersDate | null>();
    const [minorBirthPlace, setMinorBirthPlace] = useState("");
    const [minorPlaceOfResidence, setMinorPlaceOfResidence] = useState("");

    const [profit, setProfit] = useState("");
    const [docDate, setDocDate] = useState<MaterialUiPickersDate | null>();
    const [minorPerson, setMinorPerson] = useState<MinorPerson>({} as MinorPerson);
    // const [minors, setMinors] = useState<MinorPerson[]>([
    //     {
    //         Lastname: minorLastname,
    //         Firstname: minorFirstname,
    //         Middlename: minorMiddlename,
    //         IinBin: minorIinBin,
    //         BirthDate: minorBirthDate,
    //         BirthPlace: minorBirthPlace,
    //         PlaceOfResidence: minorPlaceOfResidence
    //     }
    // ]);

    // console.log("minors", minors.map((item, index) => item));

    const majorHandleDateChange = (date: MaterialUiPickersDate | null) => {
        setMajorBirthDate(date);
    };

    const minorHandleDateChange = (date: MaterialUiPickersDate | null) => {
        setMinorBirthDate(date);
    };

    const docDateHandleDateChange = (date: MaterialUiPickersDate | null) => {
        setDocDate(date);
    };

    // useEffect(() => { minors.push(minorPerson); }, [])

    return <Paper elevation={3} className={classes.root}>
        <Grid container
            alignItems="center">
            <Grid container direction="row" spacing={3} item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.minorContent}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Доверитель
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField fullWidth id="outlined-basic" label="Фамилия" variant="outlined"
                        value={majorLastname}
                        inputProps={{ maxlength: 50 }}
                        helperText={`${majorLastname.length}/${50}`}
                        onChange={(event) => setMajorLastname(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField fullWidth id="outlined-basic" label="Имя" variant="outlined"
                        value={majorFirstname}
                        inputProps={{ maxlength: 50 }}
                        helperText={`${majorFirstname.length}/${50}`}
                        onChange={(event) => setMajorFirstname(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <TextField fullWidth id="outlined-basic" label="Отчество" variant="outlined"
                        value={majorMiddlename}
                        inputProps={{ maxlength: 50 }}
                        helperText={`${majorMiddlename.length}/${50}`}
                        onChange={(event) => setMajorMiddlename(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="ИИН/БИН" variant="outlined"
                        value={majorIinBin}
                        inputProps={{ maxlength: 12 }}
                        helperText={`${majorIinBin.toString().length}/${12}`}
                        onChange={(event: any) => setMajorIinBin(event.target.value)} />
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
                            value={majorBirthDate}
                            onChange={majorHandleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider >
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="Место рождения" variant="outlined"
                        value={majorBirthPlace} onChange={(event: any) => setMajorBirthPlace(event.target.value)} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <TextField fullWidth id="outlined-basic" label="Место проживания" variant="outlined"
                        value={majorPlaceOfResidence} onChange={(event: any) => setMajorPlaceOfResidence(event.target.value)} />
                </Grid>
            </Grid>

            <hr className={classes.hr} />

            <Grid container direction="row" spacing={3} item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.majorContent}>
                {/* {minors.map((item) => ( */}
                <React.Fragment>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            Доверенный
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <TextField fullWidth id="outlined-basic" label="Фамилия" variant="outlined"
                            value={minorLastname}
                            inputProps={{ maxlength: 50 }}
                            helperText={`${minorLastname.length}/${50}`}
                            onChange={(event) => setMinorLastname(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <TextField fullWidth id="outlined-basic" label="Имя" variant="outlined"
                            value={minorFirstname}
                            inputProps={{ maxlength: 50 }}
                            helperText={`${minorFirstname.length}/${50}`}
                            onChange={(event) => setMinorFirstname(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <TextField fullWidth id="outlined-basic" label="Отчество" variant="outlined"
                            value={minorMiddlename}
                            inputProps={{ maxlength: 50 }}
                            helperText={`${minorMiddlename.length}/${50}`}
                            onChange={(event) => setMinorMiddlename(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField fullWidth id="outlined-basic" label="ИИН/БИН" variant="outlined"
                            value={minorIinBin}
                            inputProps={{ maxlength: 12 }}
                            helperText={`${minorIinBin.toString().length}/${12}`}
                            onChange={(event: any) => setMinorIinBin(event.target.value)} />
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
                                value={minorBirthDate}
                                onChange={minorHandleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider >
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField fullWidth id="outlined-basic" label="Место рождения" variant="outlined"
                            value={minorBirthPlace} onChange={(value: any) => setMinorBirthPlace(value.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField fullWidth id="outlined-basic" label="Место проживания" variant="outlined"
                            value={minorPlaceOfResidence} onChange={(value: any) => setMinorPlaceOfResidence(value.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Button
                            variant="outlined"
                            style={{ textTransform: "none" }}
                            onClick={() => {
                                const person: MinorPerson = {
                                    ...new MinorPerson()
                                };
                                setMinorPerson(person);
                            }}
                        >
                            + Добавить еще
                        </Button>
                    </Grid>
                </React.Fragment>
                {/* ))} */}

            </Grid>

            <hr className={classes.hr} />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.autocomplete}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={typeAttorney}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Интерес" />}
                    onChange={(event, value) => setProfit(value?.text || "")}
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.textAreaContent}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    value={profit}
                    style={{ width: "100%", height: "200px" }}
                    onChange={(e: any) => {
                        setProfit(e.target.value);
                    }}
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
                        value={docDate}
                        onChange={docDateHandleDateChange}
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

        </Grid>
    </Paper >
}