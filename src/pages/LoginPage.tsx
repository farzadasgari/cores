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
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, EyeClosed, Github, Facebook, Chrome } from 'lucide-react';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-slate-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo & Branding */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">CoreS</h1>
                    <p className="mt-2 text-slate-700">
                        Welcome back to your dashboard
                    </p>
                </div>

                <Card className="shadow-xl border-0 bg-card/95 backdrop-blur">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-semibold text-center">
                            Login
                        </CardTitle>
                        <CardDescription className="text-center">
                            Enter your email and password to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form className="space-y-4">
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
                                        type="password"
                                        placeholder="Enter your password"
                                        className="pl-10"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                    >
                                        <EyeClosed className="h-4 w-4 text-slate-800" />
                                    </Button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" name="remember" />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm font-normal"
                                    >
                                        Remember me
                                    </Label>
                                </div>
                                <Button
                                    variant="link"
                                    size="sm"
                                    className="px-0 font-normal"
                                >
                                    Forgot Password?
                                </Button>
                            </div>

                            {/* Login Button */}
                            <Button type="submit" className="w-full">
                                Sign In
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

                        {/* Social Login */}
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
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
