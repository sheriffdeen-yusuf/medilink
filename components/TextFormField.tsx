/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

type textFormFieldProps = {
  name: string;
  label: string;
  control: any;
  placeholder: string;
  type?: 'text' | 'number';
};

const TextFormField = ({
  name,
  label,
  control,
  placeholder,
  type = 'text',
  ...props
}: textFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel {...props}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextFormField;
