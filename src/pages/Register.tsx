import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import {
    Mail,
    Lock,
    ShieldPlus,
    Eye,
    EyeClosed,
    Github,
    Facebook,
    Chrome,
    User,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-slate-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo & Branding */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">CoreS</h1>
                    <p className="mt-2 text-slate-700">
                        Create account to get started
                    </p>
                </div>
                <Card className="shadow-xl border-0 bg-card/95 backdrop-blur">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-semibold text-center">
                            Register
                        </CardTitle>
                        <CardDescription className="text-center">
                            Create an account to access CoreS
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div className="grid grid-cols-2 gap-2">
                                {/* FirstName Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="fname">First Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                        <Input
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            placeholder="John"
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* LastName Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="lname">Last Name</Label>
                                    <div className="relative">
                                        <Input
                                            id="lname"
                                            name="lname"
                                            type="text"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Enter your password"
                                        className="pl-10"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeClosed className="h-4 w-4 text-slate-800" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-slate-800" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Repeat Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password2">
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <ShieldPlus className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                    <Input
                                        id="password2"
                                        name="password2"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Repeat your password"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Register Button */}
                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Register */}
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full">
                                <Chrome className="h-4 w-4 mr-2" />
                                Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Github className="h-4 w-4 mr-2" />
                                Github
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Facebook className="h-4 w-4 mr-2" />
                                Facebook
                            </Button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center text-sm">
                            <span className="text-muted-foreground">
                                Already have an account?{' '}
                            </span>
                            <Button
                                variant="link"
                                className="px-0 font-normal"
                                onClick={() => navigate('/login')}
                            >
                                Sign in
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 text-xs text-muted-foreground">
                    CoreS | Admin Panel © 2025 All rights reserved. Made with
                    ❤️ by
                    <a
                        className="pl-1.5 text-rose-600 hover:text-rose-400 duration-300"
                        href="https://github.com/farzadasgari/"
                        target="_blank"
                    >
                        FarZad
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
