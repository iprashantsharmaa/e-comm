import React from 'react';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import clsx from 'clsx';

type Props = {
  id?: string;
  className?: string;
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  value: string | undefined;
  options: string[];
  onChange: (option: string) => void;
  disabled?: boolean;
};
export default function Select({
  id,
  className,
  name,
  label,
  defaultValue,
  value,
  options,
  onChange,
  disabled,
}: Props) {
  const selectClasses = clsx('muiSelect rounded-md bg-gray-800 w-1/5', className);
  const handleChange = (e: SelectChangeEvent) => {
    const { target: { value } } = e;
    onChange(value);
  };

  return (
    <MuiSelect
      className={selectClasses}
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      label={label}
      multiple={false}
      onChange={handleChange}
      disabled={disabled}
    >
      {options.map((option: string) => (
        <MenuItem
          className="!capitalize"
          key={option}
          value={option}
        >
          {option}
        </MenuItem>
      ))}
    </MuiSelect>
  );
}
