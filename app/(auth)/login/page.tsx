'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isSubmitting) return;

        setEmailError('');
        setPasswordError('');
        setGeneralError('');

        const emailValue = email.trim();
        let hasErrors = false;

        if (!emailValue) {
        setEmailError('Email is required');
        hasErrors = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        setEmailError('Please enter a valid email address');
        hasErrors = true;
        }

        if (!password) {
        setPasswordError('Password is required');
        hasErrors = true;
        }

        if (hasErrors) return;

        setIsSubmitting(true);

        try {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email: emailValue,
            password,
        });

        if (error) {
            if (error.code === 'invalid_credentials') {
            setGeneralError('Invalid email or password');
            } else if (error.code === 'email_not_confirmed') {
            setGeneralError(
                'Please confirm your email before signing in.'
            );
            } else {
            setGeneralError(
                'Unable to sign in right now. Please try again.'
            );
            }
            return;
        }

        router.replace('/dashboard');
        router.refresh();
        } catch {
        setGeneralError(
            'Unable to connect. Check your connection and try again.'
        );
        } finally {
        setIsSubmitting(false);
        }
    }

    const inputClass =
        'w-full rounded-lg bg-[#e1e8f5]/20 p-3 text-[#0f1727] ' +
        'placeholder:text-gray-500 focus:outline-none ' +
        'focus:ring-2 focus:ring-primary';

    return (
        <main>
        <p className="font-fredoka text-xl text-[#e1e8f5] ml-0 md:ml-20 mt-5 text-center md:text-left">
            Welcome back! Sign in to continue
        </p>

        <div className="w-full mx-auto max-w-md rounded-2xl bg-background/50 py-20 px-10 md:justify-self-end md:mr-50 md:-mt-25 mt-10">
            <h1 className="mb-6 text-center font-fredoka text-3xl">
            Sign In
            </h1>

            <form
            onSubmit={handleLogin}
            noValidate
            className="space-y-5"
            >
            {generalError && (
                <p role="alert" className="text-sm text-red-600">
                {generalError}
                </p>
            )}

            <div>
                <label
                htmlFor="email-input"
                className="mb-2 block text-sm"
                >
                Email
                </label>

                <input
                id="email-input"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className={inputClass}
                aria-invalid={Boolean(emailError)}
                aria-describedby={
                    emailError ? 'email-error' : undefined
                }
                disabled={isSubmitting}
                />

                {emailError && (
                <p
                    id="email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                >
                    {emailError}
                </p>
                )}
            </div>

            <div>
                <label
                htmlFor="password-input"
                className="mb-2 block text-sm"
                >
                Password
                </label>

                <input
                id="password-input"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className={inputClass}
                aria-invalid={Boolean(passwordError)}
                aria-describedby={
                    passwordError ? 'password-error' : undefined
                }
                disabled={isSubmitting}
                />

                {passwordError && (
                <p
                    id="password-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                >
                    {passwordError}
                </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow h-14 w-full rounded-full bg-primary font-bold text-white hover:bg-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? 'Signing in…' : 'Sign In'}
            </button>
            </form>

            <p className="mt-6 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
                href="/signup"
                className="text-primary hover:underline"
            >
                Sign Up
            </Link>
            </p>
        </div>
        </main>
    );
}