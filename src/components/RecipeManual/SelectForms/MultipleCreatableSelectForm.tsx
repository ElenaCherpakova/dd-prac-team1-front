import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import {  ChakraStylesConfig, CreatableSelect } from "chakra-react-select";
import { Options } from "../../../utils/types";

const chakraStyles: ChakraStylesConfig = {
    menu: (provided) => ({
        ...provided,
        my: 0,
        borderWidth: "1px",
        borderColor: "#D7DA5E",
        borderRadius: "md"
    }),
    dropdownIndicator: (prev, { selectProps: { menuIsOpen } }) => ({
        ...prev,
        bg: "#D7DA5E",
        "> svg": {
            transitionDuration: "normal",
            transform: `rotate(${menuIsOpen ? -180 : 0}deg)`
        }
    })
    };

type OptionsProps = {options : Options[]}

const MultipleCreatableSelectForm = ( {options}: OptionsProps ) => (
        <Box>
            <FormControl>
            <CreatableSelect        
                className="chakra-react-select"
                classNamePrefix="chakra-react-select"
                isMulti
                chakraStyles={chakraStyles}
                //selectedOptionColorScheme="green"
                name="colors"
                options={options}
                placeholder="Choose or type tags"
                closeMenuOnSelect={false}
            />  
            </FormControl>
        </Box>
);

export default MultipleCreatableSelectForm;
