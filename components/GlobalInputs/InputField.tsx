"use client";

import React, { FC } from "react";

export interface BaseInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  type:
    | "text"
    | "password"
    | "email"
    | "OTP"
    | "avatar"
    | "number"
    | "file"
    | "select"
    | "multiSelect"
    | "multiSelect_images"
    | "rating"
    | "places_autocomplete"
    | "text-area"
    | "date"
    | "checkbox";
  form: any;
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
}

export interface InputFieldProps extends BaseInputProps {
  options?: { value: string | null; label: string }[];
  async_function?: (
    input: string
  ) => Promise<{ value: string; label: string }[]>;
}

type SelectOption = {
  value: string;
  label: string;
};

// Define SelectArray as an array of SelectOption
export interface SelectProp extends BaseInputProps {
  options: SelectOption[];
}

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputAddress from "./components/InputAddress/input";
import InputCheckbox from "./components/InputCheckBox";
import ImageInput from "./components/InputImage";
import InputMultiSelect from "./components/InputMultiSelect";
import InputOTPController from "./components/InputOTP";
import InputRating from "./components/InputRating";
import InputSelect from "./components/InputSelect";
import InputTextArea from "./components/InputTextArea";
import MultiImageInput from "./components/multiImageInput";

const InputField: FC<InputFieldProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    type,
    form,
    className,
    disabled = false,
    autoComplete = "off",
  } = props;
  if (type === "OTP") {
    return <InputOTPController {...props} />;
  }
  if (type === "avatar") {
    return <ImageInput {...props} />;
  }

  if (type === "select" && props?.options) {
    return <InputSelect {...props} />;
  }

  if (type === "multiSelect" && props?.options) {
    return <InputMultiSelect {...props} />;
  }
  if (type === "multiSelect_images") {
    return <MultiImageInput {...props} />;
  }
  if (type === "rating") {
    return <InputRating {...props} />;
  }
  if (type === "places_autocomplete") {
    return <InputAddress {...props} />;
  }
  if (type === "text-area") {
    return <InputTextArea {...props} />;
  }
  if (type === "checkbox") {
    return <InputCheckbox {...props} />;
  }

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className={`max-w-[300px] min-w-[300px] ${className}`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              autoComplete={autoComplete}
              size={6}
              onWheel={(e) => e.currentTarget.blur()}
              className="dark:focus:ring-white "
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default React.memo(InputField);
