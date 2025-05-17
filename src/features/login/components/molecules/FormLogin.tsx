import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { TLoginFormProps } from '../../types/loginTypes'
import { PasswordInput } from '../atoms/PasswordInput'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from '../../schemas/defaultLoginSchema'
import EmailInput from '../atoms/EmailInput'

export const FormLogin = ({ onSubmit, values, onChange, className, schemaValidation, classNameForgot, actionForgotPassword }: TLoginFormProps) => {
    const form = useForm({
        resolver: yupResolver(schemaValidation as any ?? loginValidationSchema),
        defaultValues: values,
    });

    return (
        <Form {...form}>
            <form className={cn('space-y-3 w-full px-5 py-3', className)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm">E-mail</FormLabel>
                            <FormControl>
                                <EmailInput {...field}
                                    type="email"
                                    placeholder="Please input your E-mail"
                                    className={` text-base ${form.formState.errors.email ? "border-red-500" : ""}`}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        onChange(e)
                                        form.trigger("email");
                                    }} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm">Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    {...field}
                                    placeholder="Please input your password"
                                    className={` text-base ${form.formState.errors.password ? "border-red-500" : ""}`}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        onChange(e)
                                        form.trigger("password");
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className=' flex flex-wrap justify-between items-center gap-3'>
                    <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                            <FormItem className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(e) => {
                                                field.onChange(e)
                                                onChange({ target: { name: 'remember', value: e } } as any)
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel className="text-sm">Remember me</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <div>
                        <div onClick={actionForgotPassword} className={cn("text-sm cursor-pointer hover:underline underline-offset-2 text-primary", classNameForgot)}>Forgot password?</div>
                    </div>
                </div>

                <Button type='button' onClick={onSubmit} className='w-full'>Sign in</Button>
            </form>
        </Form>
    )
}
