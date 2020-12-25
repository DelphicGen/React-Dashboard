import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: '#fff',
        marginTop: '20px',
    },
    formControl: {
        minWidth: 120,
        margin: '12px 0 20px',
    },
});

function CustomSelect({changeHandler, list, selected}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="flex flex-col items-center mx-auto">
            <Button className={classes.button} onClick={handleOpen}>
                Select Month
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Select Month</InputLabel>
                <Select
                labelId="select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={selected}
                onChange={changeHandler}>
                {list.map((item, index) => (
                    <MenuItem key={index + 1} value={item}>
                    {item}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
  );
}

export default CustomSelect
