const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-slate-200">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl text-slate-600 mb-4">
                    Oops! Page not found...
                </p>
                <a
                    href="/"
                    className="text-rose-600 hover:text-rose-400 underline"
                >
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
