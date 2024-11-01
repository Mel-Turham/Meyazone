'use client';
import { useCallback } from 'react';
import { LoginForm as ILogin, loginSchema } from '@/schema/loginSchema';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const LoginForm = () => {
  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitted },
  } = form;

  const onSubmit = useCallback(
    async (values: ILogin) => {
      console.log(values);
      reset();
    },
    [reset]
  );

  return (
    <Card className='max-auto w-4/12'>
      <CardHeader className='space-y-2'>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome back! Sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Your email please...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Your password please...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full' disabled={isSubmitted}>
              {isSubmitted ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='text-sm justify-between'>
        <Link
          href='/forgot-password'
          className=' text-blue-600 hover:underline'
        >
          Forgot password?
        </Link>
        <p>
          Don&apos;t have an account?
          <Link
            href='/register'
            className='text-sm text-blue-600 hover:underline ml-1'
          >
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
