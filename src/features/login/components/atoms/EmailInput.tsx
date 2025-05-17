import { Input } from '@/components/ui/input';
import React from 'react';

export default function EmailInput({ value, onChange, onBlur, onFocus, ...otherProps }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Input value={value} onChange={onChange} {...otherProps} />
    )
}
