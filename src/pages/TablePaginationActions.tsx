import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {
    makeStyles,
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { Forms } from '../forms';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },

    });

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

interface Doc {
    code: string;
    name: string;
}

interface Row {
    id: number;
    name: string;
    docs: Doc[]
}

const rows: Row[] = [
    { id: 1, name: "Авто", docs: [{ code: "power_Of_attorney_auto", name: "Доверенность авто на продажу" }, { code: "power_Of_attorney_auto2", name: "Auto2" }] },
    { id: 2, name: "Donut", docs: [{ code: "1", name: "Donut1" }, { code: "2", name: "Donut2" }] },
    // { id: 3, name: 'Eclair', docs: [{ code: "1", name: "Eclair1" }, { code: "2", name: "Eclair2" }] },
    // { id: 4, name: 'Frozen yoghurt', docs: [{ code: "1", name: "Frozen1" }, { code: "2", name: "Frozen2" }] },
    // { id: 5, name: 'Gingerbread', docs: [{ code: "1", name: "Gingerbread1" }, { code: "2", name: "Gingerbread2" }] },
    // { id: 6, name: 'Honeycomb', docs: [{ code: "1", name: "Honeycomb1" }, { code: "2", name: "Honeycomb2" }] },
    // { id: 7, name: 'Ice cream sandwich', docs: [{ code: "1", name: "Ice1" }, { code: "2", name: "Ice2" }] },
    // { id: 8, name: 'Jelly Bean', docs: [{ code: "1", name: "Jelly1" }, { code: "2", name: "Jelly2" }] },
    // { id: 9, name: 'KitKat', docs: [{ code: "1", name: "KitKat1" }, { code: "2", name: "KitKat2" }] },
    // { id: 10, name: 'Lollipop', docs: [{ code: "1", name: "Lollipop1" }, { code: "2", name: "Lollipop2" }] },
    // { id: 11, name: 'Marshmallow', docs: [{ code: "1", name: "Marshmallow1" }, { code: "2", name: "Marshmallow2" }] },
    // { id: 12, name: 'Nougat', docs: [{ code: "1", name: "Nougat1" }, { code: "2", name: "Nougat2" }] },
    // { id: 13, name: 'Oreo', docs: [{ code: "1", name: "Oreo1" }, { code: "2", name: "Oreo2" }] }
]

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [doc, setDoc] = React.useState({} as Doc);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const SendItem = (doc: Doc) => {
        setDoc(doc);
        setOpen(true);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>{row.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {row.docs.map((doc: Doc, index: number) => {
                                    return (
                                        <MenuItem key={index} value={doc.code} onClick={() => SendItem(doc)}>
                                            {doc.name}
                                        </MenuItem>
                                    );
                                })}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography >
                        {doc.name}
                    </Typography>
                </DialogTitle>
                <DialogContent >

                    <Forms code={doc.code} name={doc.name} />

                </DialogContent>

            </Dialog>

        </TableContainer >
    );
}

