import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Mail, Lock } from 'lucide-react';

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
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
