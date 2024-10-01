"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useCallback, useRef } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { MdCameraAlt } from "react-icons/md";
import { BaseInputProps } from "../InputField";

const ImageInput = ({
  label,
  name,
  form,
  className,
  disabled,
}: BaseInputProps) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      field: ControllerRenderProps<FieldValues, any>
    ) => {
      const file = e.target.files?.[0];

      if (file) {
        field.onChange(file);
      }
      // eslint-disable-next-line
    },
    []
  );

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => {
        return (
          <FormItem className="h-min text-center">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div
                className={`flex px-2 border-gray-200 border-[.5px] bg-[#f8f8ff59] py-[6px] items-center h-48 w-48 rounded-full justify-center !hover:bg-[ghostwhite] cursor-pointer transition-all !bg-cover ${className}`}
                style={{
                  background: `linear-gradient(45deg, #f8f8ff59, #f8f8ff59), url(${
                    field?.value instanceof File
                      ? URL?.createObjectURL(field?.value)
                      : field?.value
                  })`,
                }}
                onClick={() => {
                  hiddenInputRef?.current?.click();
                }}
              >
                <MdCameraAlt className="!text-gray-700 !text-4xl" />
                <input
                  type="file"
                  accept="image/png,image/gif,image/jpeg,image/webp"
                  id="logo_url"
                  placeholder="placeholder"
                  onChange={(e) => {
                    handleFileChange(e, field);
                  }}
                  className="hidden"
                  ref={hiddenInputRef}
                />
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default React.memo(ImageInput);
