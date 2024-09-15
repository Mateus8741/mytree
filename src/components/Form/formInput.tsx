import {
  Controller,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form'
import { Input, type InputFieldProps } from '../input'

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...fieldProps
}: InputFieldProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input
          value={field.value}
          onChange={field.onChange}
          errorMessages={fieldState.error?.message}
          {...fieldProps}
        />
      )}
    />
  )
}
