"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as React from "react";
import CreatableSelect from "react-select/creatable";
import { InputFieldProps } from "../InputField";

const InputMultiSelect: React.FC<InputFieldProps> = (props) => {
  const { label, name, form, options, className, placeholder, disabled } =
    props;

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className={`max-w-[300px] min-w-[300px] ${className}`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <CreatableSelect
              className="w-full"
              defaultValue={field.value}
              placeholder={placeholder}
              isMulti
              name={name}
              options={options}
              onChange={(value) => {
                field.onChange(value);
              }}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputMultiSelect;
