import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { InputFieldProps } from "../InputField";

type Props = {};

const InputTextArea = (props: InputFieldProps) => {
  const { label, name, form, placeholder, className, disabled } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => {
        return (
          <FormItem className={`max-w-[300px] min-w-[300px] ${className}`}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea placeholder={placeholder} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputTextArea;
