import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import H2 from "../typo/H2";
import InputField from "../ui/InputField";
import SelectLabels from "../ui/SelectLabel";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Button } from "../ui/button";

const CheckBox = () => {
    return (
        <div className="bg-[#FFFBF4] w-full">
            <div className="my-12 w-[50%] mx-auto">
                <H2 className="text-center">Obveščanje o osmrtnicah v domačem kraju</H2>
                <div className="flex gap-8 justify-center items-center py-4">
                    <SelectLabels
                        width="320px"
                        label="Išči po kraju"
                        menuItems={[
                            { value: 10, label: 'Ten' },
                            { value: 20, label: 'Twenty' },
                            { value: 30, label: 'Thirty' },
                        ]}
                    />
                    <InputField width="320px" />
                </div>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox
                            size="small"
                            icon={<CheckBoxOutlineBlankOutlinedIcon />}
                            checkedIcon={<CheckBoxOutlinedIcon />}
                            style={{
                                color: "black",
                            }}
                        />}
                        label={
                            <Typography fontSize={12}>
                                Strinjam se s{" "}
                                <a href="/your-link" style={{ textDecoration: "underline" }}>
                                    splošnimi pogoji in pravili
                                </a>
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox
                            size="small"
                            icon={<CheckBoxOutlineBlankOutlinedIcon />}
                            checkedIcon={<CheckBoxOutlinedIcon />}
                            defaultChecked
                            style={{
                                color: "black",
                            }}
                        />}
                        label={
                            <Typography fontSize={12}>
                                Enkrat mesečno prejemam tudi novice, posebne popuste, občasne brezplačne nadgradnje
                            </Typography>
                        }
                    />
                </FormGroup>
                <Button variant="primary" size="lg">sdjdk</Button>
            </div>
        </div>
    )
}

export default CheckBox;
