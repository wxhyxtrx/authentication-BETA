import type React from "react";
import { Schema } from "yup";

export interface ILoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export interface ILoginStore {
  formLogin: ILoginFormValues;
  setFormLogin: (value: Partial<ILoginFormValues>) => void;
}

export type TLoginFormProps = {
  onSubmit: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  values: ILoginFormValues;
  className?: string;
  schemaValidation?: Schema<ILoginFormValues>;
  classNameForgot?: string;
  actionForgotPassword?: () => void;
};

export interface IUseLoginForm {
  values: ILoginFormValues;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}

type LoginLayoutVariant = "center" | "split-left" | "split-right";

export interface LoginSectionProps {
  variant?: LoginLayoutVariant;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  classNameContent?: string;
  contentActionRegister?: React.ReactNode | string;
  actionRegister?: () => void;
  classNameForgot?: string;
  actionForgot?: () => void;
  actionSignIn?: () => void;
}
