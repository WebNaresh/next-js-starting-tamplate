"use client";

import * as React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { BaseInputProps } from "../InputField";

const InputOTPController: React.FC<BaseInputProps> = (props) => {
  const { label, name, form, disabled } = props;

  return (
    <div className="max-w-[300px] min-w-[300px] ">
      <FormField
        control={form.control}
        name={name}
        disabled={disabled}
        render={({ field }) => (
          <FormItem className="h-min">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <InputOTP
                maxLength={6}
                value={field.value}
                onChange={field.onChange}
              >
                <InputOTPGroup className="w-full">
                  <InputOTPSlot className="w-full" index={0} />
                  <InputOTPSlot className="w-full" index={1} />
                  <InputOTPSlot className="w-full" index={2} />
                  <InputOTPSlot className="w-full" index={3} />
                  <InputOTPSlot className="w-full" index={4} />
                  <InputOTPSlot className="w-full" index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputOTPController;