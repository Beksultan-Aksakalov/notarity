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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from '@mui/system';

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
        },
        datePicker: {
            borderRadius: "3px",
            borderColor: "light",
            borderWidth: "1px",
            padding: "8px",
            fontWeight: "normal",
            fontSize: "14px"
        },
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

    const [attorneys, setAttorneys] = useState([
        {
            id: 1,
            lastname: "",
            firstname: "",
            middlename: "",
            iinBin: "",
            birthDate: new Date(),
            birthPlace: "",
            placeOfResidence: ""
        }
    ]);

    const onAddItem = () => {
        // const max = attorneys.reduce((max, obj) => (max.id > obj.id) ? max : obj)
        const max = Math.max(...attorneys.map(o => o.id))
        setAttorneys([...attorneys, {
            id: max + 1,
            lastname: "",
            firstname: "",
            middlename: "",
            iinBin: "",
            birthDate: new Date(),
            birthPlace: "",
            placeOfResidence: ""
        }])
    }

    const onRemoveItem = (index: number) => {
        const list = [...attorneys]
        list.splice(index, 1)

        setAttorneys(list)
    }

    const onChangeItem = (item: MinorPerson, index: number) => {
        const list = [...attorneys]
        list[index] = item;

        setAttorneys(list)
    }

    const [profit, setProfit] = useState("");
    const [docDate, setDocDate] = useState<MaterialUiPickersDate | null>();

    const majorHandleDateChange = (date: MaterialUiPickersDate | null) => {
        setMajorBirthDate(date);
    };

    const docDateHandleDateChange = (date: MaterialUiPickersDate | null) => {
        setDocDate(date);
    };

    return (
        <Paper elevation={3} className={classes.root}>
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
                            inputProps={{ maxLength: 50 }}
                            helperText={`${majorLastname.length}/${50}`}
                            onChange={(event) => setMajorLastname(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <TextField fullWidth id="outlined-basic" label="Имя" variant="outlined"
                            value={majorFirstname}
                            inputProps={{ maxLength: 50 }}
                            helperText={`${majorFirstname.length}/${50}`}
                            onChange={(event) => setMajorFirstname(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <TextField fullWidth id="outlined-basic" label="Отчество" variant="outlined"
                            value={majorMiddlename}
                            inputProps={{ maxLength: 50 }}
                            helperText={`${majorMiddlename.length}/${50}`}
                            onChange={(event) => setMajorMiddlename(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField fullWidth id="outlined-basic" label="ИИН/БИН" variant="outlined"
                            value={majorIinBin}
                            inputProps={{ maxLength: 12 }}
                            helperText={`${majorIinBin.toString().length}/${12}`}
                            onChange={(event: any) => setMajorIinBin(event.target.value)} />
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
                    </Grid> */}

                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Typography component="div">
                            <Box sx={{ fontWeight: 'light', fontSize: '0.8rem' }}>
                                Дата рождения
                            </Box>
                        </Typography>
                        <DatePicker
                            selected={majorBirthDate}
                            dateFormat="dd/MM/yyyy"
                            className={classes.datePicker}
                            onChange={(date: Date) => {

                                setMajorBirthDate(date)
                            }}
                        />
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
                    {attorneys.map((item: MinorPerson, index: any) => (
                        <React.Fragment>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Доверенный {item.id}
                                </Typography>

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <TextField fullWidth id="outlined-basic" label="Фамилия" variant="outlined"
                                    value={item.lastname}
                                    inputProps={{ maxLength: 50 }}
                                    helperText={`${item.lastname.length}/${50}`}
                                    onChange={(event) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            lastname: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <TextField fullWidth id="outlined-basic" label="Имя" variant="outlined"
                                    value={item.firstname}
                                    inputProps={{ maxLength: 50 }}
                                    helperText={`${item.firstname.length}/${50}`}
                                    onChange={(event) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            firstname: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <TextField fullWidth id="outlined-basic" label="Отчество" variant="outlined"
                                    value={item.middlename}
                                    inputProps={{ maxLength: 50 }}
                                    helperText={`${item.middlename.length}/${50}`}
                                    onChange={(event) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            middlename: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <TextField fullWidth id="outlined-basic" label="ИИН/БИН" variant="outlined"
                                    value={item.iinBin}
                                    inputProps={{ maxLength: 12 }}
                                    helperText={`${item.iinBin.toString().length}/${12}`}
                                    onChange={(event: any) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            iinBin: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <Typography component="div">
                                    <Box sx={{ fontWeight: 'light', fontSize: '0.8rem' }}>
                                        Дата рождения
                                    </Box>
                                </Typography>
                                <DatePicker
                                    selected={item.birthDate}
                                    dateFormat="dd/MM/yyyy"
                                    className={classes.datePicker}
                                    onChange={(date: Date) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            birthDate: date
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Место рождения"
                                    variant="outlined"
                                    value={item.birthPlace}
                                    onChange={(event: any) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            birthPlace: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Место проживания"
                                    variant="outlined"
                                    value={item.placeOfResidence}
                                    onChange={(event: any) => {
                                        var person: MinorPerson = {
                                            ...item,
                                            placeOfResidence: event.target.value
                                        }
                                        onChangeItem(person, index)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11} xl={11} />
                            {index != 0 ?
                                <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        style={{ textTransform: "none" }}
                                        onClick={() => {
                                            onRemoveItem(index)
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </Grid> : <></>}
                        </React.Fragment>
                    ))}
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ textTransform: "none" }}
                            onClick={() => { onAddItem() }}
                        >
                            Добавить
                        </Button>
                    </Grid>
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
                    <Button variant="outlined" color="primary">
                        Печатать
                    </Button>
                </Grid>

            </Grid>
        </Paper >)
}