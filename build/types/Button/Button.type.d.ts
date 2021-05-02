import React from "react";
export interface IStyleButtonProps {
    theme: 'outlined' | 'fill' | 'text' | 'delete';
    color: 'primary' | 'secondary' | 'inherit';
    animation: boolean;
    size: 'large' | 'medium' | 'small';
    mobileViewsize: string | undefined;
}
export interface IButtonProps {
    children: React.ReactNode;
    theme?: 'outlined' | 'fill' | 'text' | 'delete';
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'inherit';
    animation?: boolean;
    size?: 'large' | 'medium' | 'small';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    mobileViewButton?: {
        icon: React.ReactNode;
        viewSize: string;
    };
}