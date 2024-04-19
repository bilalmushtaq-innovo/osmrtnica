import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectLabelsProps {
    width: string;
    label: string;
    menuItems: { value: string | number; label: string }[];
}

const SelectLabels: React.FC<SelectLabelsProps> = ({ width, label, menuItems }) => {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value as string);
    };

    return (
        <div>
            <FormControl sx={{
                width: width,
                minWidth: 220, radius: 2,
                "& .MuiInputBase-root": {
                    borderColor: "#7C7C7C !important",
                    borderRadius: "8px !important",
                    backgroundColor: "#FFFFFF !important",
                },
            }}>
                <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedValue}
                    label={label}
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                    sx={{
                        "& .MuiSelect-select": {
                            paddingX: "14px !important",
                            paddingY: "13px !important",
                        },
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {menuItems.map((menuItem) => (
                        <MenuItem key={menuItem.value} value={menuItem.value}>
                            {menuItem.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}

export default SelectLabels;
