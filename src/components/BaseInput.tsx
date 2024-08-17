import { InputBaseComponentProps, TextField } from '@mui/material';

interface Props {
    variant: 'outlined' | 'filled' | 'standard';
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    disabled: boolean;
    id: string;
    label: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    error: boolean;
    placeholder?: string;
    size: 'small' | 'medium';
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    helperText?: string;
    inputProps?: InputBaseComponentProps;
    value: string | number | object | Array<string | number>;
}

const BaseInput = ({
    variant = 'outlined',
    color,
    disabled,
    id,
    label,
    name,
    type,
    onChange,
    error,
    placeholder,
    size,
    onBlur,
    helperText,
    inputProps,
    value
}: Props) => {
    return (
        <TextField
            size={size}
            placeholder={placeholder}
            error={error}
            onChange={onChange}
            color={color}
            disabled={disabled}
            id={id}
            label={label}
            name={name}
            type={type}
            variant={variant}
            onBlur={onBlur}
            helperText={helperText}
            inputProps={inputProps}
            value={value}
        />
    );
};

export default BaseInput;
