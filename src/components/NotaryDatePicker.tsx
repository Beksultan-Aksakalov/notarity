import MomentUtils from "@date-io/moment";
import { createMuiTheme, InputAdornmentProps } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";
import "moment/locale/ru";
import React from "react";

moment.locale("ru");

const datePickerTheme = (createMuiTheme as any)({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: green["800"]
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {}
    },
    MuiPickersDay: {
      day: {
        color: green["800"]
      },
      daySelected: {
        backgroundColor: green["400"]
      },
      dayDisabled: {
        color: green["100"]
      },
      current: {
        color: green["900"]
      }
    },
    MuiPickersYear: {
      year: {
        color: green["800"]
      },
      yearSelected: {
        backgroundColor: green["400"]
      },
      yearDisabled: {
        color: green["100"]
      },
      current: {
        color: green["900"]
      }
    },
    MuiPickersModal: {
      dialogAction: {
        color: green["800"]
      }
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid #E8E8E8",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "#FFFFFF",
      boxSizing: "border-box",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover:not($disabled)": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff",
        border: "2px solid #1F7042"
      },
      "&$disabled": {
        backgroundColor: "#fff"
      },
      "& label.Mui-focused": {
        color: "green"
      }
    },
    focused: {},
    disabled: {
      backgroundColor: "#fff",
      color: "#8B98A7"
    }
  })
);

const useDatePickerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      width: "100%"
    }
  })
);

const useLabelStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "1px"
    }
  })
);

const useAdornmentStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

const NotaryDatePicker = (props: KeyboardDatePickerProps) => {
  const classes = useStyles({});
  const datePickerClasses = useDatePickerStyles({});
  const labelClasses = useLabelStyles({});
  const adornmentClasses = useAdornmentStyles({});

  const [locale] = React.useState("ru");
  const minDateMsg =
    "Дата не должна быть раньше минимальной даты (" +
    (props.minDate
      ? moment(props.minDate).format("DD.MM.YYYY")
      : "01.01.1900") +
    ")";
  const maxDateMsg =
    "Дата не должна быть позже максимальной даты" +
    (props.maxDate
      ? " (" + moment(props.maxDate).format("DD.MM.YYYY") + ")"
      : "");
  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale={locale}
    >
      <ThemeProvider theme={datePickerTheme}>
        <KeyboardDatePicker
          autoOk
          className={datePickerClasses.root}
          inputProps={{ style: { paddingTop: "20px" } }}
          variant="inline"
          invalidDateMessage="Дата должна быть в формате дд.мм.гггг"
          minDateMessage={minDateMsg}
          maxDateMessage={maxDateMsg}
          inputVariant="filled"
          format="DD.MM.YYYY"
          margin="normal"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          InputProps={
            {
              classes,
              disableUnderline: true
            } as Partial<OutlinedInputProps>
          }
          InputLabelProps={
            {
              classes: labelClasses,
              required: false
            } as Partial<InputLabelProps>
          }
          InputAdornmentProps={
            {
              classes: adornmentClasses
            } as Partial<InputAdornmentProps>
          }
          {...props}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default NotaryDatePicker;
