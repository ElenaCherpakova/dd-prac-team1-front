import React from "react";
import {
    Box,
    FormControl,

} from "@chakra-ui/react";
import {  ChakraStylesConfig, Select } from "chakra-react-select";
import { Options } from "../../../utils/types";

const chakraStyles: ChakraStylesConfig = {
    menu: (provided) => ({
        ...provided,
        my: 0,
        borderWidth: "1px",
        borderColor: "green",
        borderRadius: "md"
    }),
    dropdownIndicator: (prev, { selectProps: { menuIsOpen } }) => ({
        ...prev,
        bg: "green",
        "> svg": {
            transitionDuration: "normal",
            transform: `rotate(${menuIsOpen ? -180 : 0}deg)`
        }
    })
    };

type OptionsProps = {options : Options[]}

const MultipleSelectForm = ( {options}: OptionsProps) => (
        <Box>
            <FormControl>
            <Select        
                isMulti
                chakraStyles={chakraStyles}
                focusBorderColor="brandGray"
              //  selectedOptionColorScheme="green"
                name="colors"
                options={options}
                placeholder="Choose a special diet"
                closeMenuOnSelect={false}
            />  
            </FormControl>
        </Box>
);

export default MultipleSelectForm;
