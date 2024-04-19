import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputFieldProps {
    width: string;
}

const InputField: React.FC<InputFieldProps> = ({ width }) => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="on"
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: "8px !important",
                    width: width,
                },
                '& .MuiFormControl-root': {
                    backgroundColor: "#FFFFFF !important",
                    borderRadius: "8px !important",
                },
                '& .MuiInputBase-input': {
                    paddingX: "14px !important",
                    paddingY: "13px !important",
                },
            }}
        >
            <TextField id="outlined-basic" label="Išči po imenu / priimku" variant="outlined" />
        </Box>
    );
}

export default InputField;