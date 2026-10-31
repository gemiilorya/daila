'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setGeneralError('');
    setMessage('');

    const usernameValue = username.trim();
    const emailValue = email.trim();

    let hasErrors = false;

    if (!usernameValue) {
        setUsernameError('Username is required');
        hasErrors = true;
        } else if (usernameValue.length < 3) {
        setUsernameError('Username must be at least 3 characters');
        hasErrors = true;
        }

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
        } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        hasErrors = true;
        }

        if (hasErrors) return;

        setIsSubmitting(true);

        try {
        const supabase = createClient();

        const { data: existingUser, error: lookupError } = await supabase
            .from('profiles')
            .select('username')
            .eq('username', usernameValue)
            .maybeSingle();

        if (lookupError) {
            setGeneralError(
            'Unable to check username availability. Please try again.'
            );
            return;
        }

        if (existingUser) {
            setUsernameError('Username is already taken');
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: emailValue,
            password,
            options: {
            data: {
                username: usernameValue,
            },
            },
        });

        if (error) {
            if (error.code === 'user_already_exists') {
            setEmailError('An account with this email already exists');
            } else if (error.code === 'weak_password') {
            setPasswordError(error.message);
            } else {
            setGeneralError(error.message);
            }
            return;
        }

        if (data.session) {
            router.replace('/dashboard');
            router.refresh();
        } else {
            setMessage(
            'Check your email for a confirmation link. If you already have an account, sign in.'
            );
        }
        } catch {
        setGeneralError('Something went wrong. Please try again.');
        } finally {
        setIsSubmitting(false);
        }
    }

    const inputClass =
        'w-full rounded-lg bg-[#e1e8f5] p-3 text-[#0f1727] ' +
        'focus:outline-none focus:ring-2 focus:ring-[#5359a7]';

    return (
        <main className="">
        <p className="font-fredoka text-xl text-[#e1e8f5] ml-20 mt-5">
            Create an account to get started
        </p>

        <div className="w-full max-w-md rounded-2xl bg-background py-20 px-10 md:justify-self-end mr-50 -mt-50">
            <h1 className="mb-6 text-center font-fredoka text-3xl">
            Sign Up
            </h1>

            <form onSubmit={handleSignUp} noValidate className="space-y-5">
            {generalError && (
                <p role="alert" className="text-sm text-red-600">
                {generalError}
                </p>
            )}

            {message && (
                <p role="status" className="text-sm text-primary">
                {message}
                </p>
            )}

            <div>
                <label htmlFor="username-input" className="mb-2 block text-sm">
                Username
                </label>
                <input
                id="username-input"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Create a username"
                className={inputClass}
                aria-invalid={Boolean(usernameError)}
                aria-describedby={usernameError ? 'username-error' : undefined}
                disabled={isSubmitting}
                />
                {usernameError && (
                <p id="username-error" role="alert" className="mt-2 text-sm text-red-600">
                    {usernameError}
                </p>
                )}
            </div>

            <div>
                <label htmlFor="email-input" className="mb-2 block text-sm">
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
                aria-describedby={emailError ? 'email-error' : undefined}
                disabled={isSubmitting}
                />
                {emailError && (
                <p id="email-error" role="alert" className="mt-2 text-sm text-red-600">
                    {emailError}
                </p>
                )}
            </div>

            <div>
                <label htmlFor="password-input" className="mb-2 block text-sm">
                Password
                </label>
                <input
                id="password-input"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a password"
                className={inputClass}
                aria-invalid={Boolean(passwordError)}
                aria-describedby={passwordError ? 'password-error' : undefined}
                disabled={isSubmitting}
                />
                {passwordError && (
                <p id="password-error" role="alert" className="mt-2 text-sm text-red-600">
                    {passwordError}
                </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow h-14 w-full rounded-full bg-[#5359a7] font-bold text-white hover:bg-[#4a5190] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? 'Creating account…' : 'Create Account'}
            </button>
            </form>

            <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-[#5359a7] hover:underline">
                Sign In
            </Link>
            </p>
        </div>
        </main>
    );
}