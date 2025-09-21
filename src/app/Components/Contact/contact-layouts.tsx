import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ContactForm } from './contact-data'
import { useState, useEffect } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export function ContactLayouts({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [message, setMessage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertTitle, setAlertTitle] = useState<string>("");
    const [alertDescription, setAlertDescription] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const SubmitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isClient) return;

        setIsSubmitting(true);

        try {
            await ContactForm(name, email, message);
            setAlertTitle("Success!");
            setAlertDescription("Your message has been sent successfully. I'll get back to you soon!");
            setShowAlert(true);
            setEmail("")
            setName("")
            setMessage("")
        } catch {
            setAlertTitle("Error");
            setAlertDescription("Failed to send your message. Please try again later.");
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);
        }
    }

    // Don't render the form until we're on the client side
    if (!isClient) {
        return (
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card className="overflow-hidden">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Contact Me</h1>
                                <p className="text-balance text-muted-foreground">
                                    Loading...
                                </p>
                            </div>
                        </div>
                        <div className="relative hidden rounded-l-2xl bg-muted md:block">
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={SubmitData} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Contact Me</h1>
                                <p className="text-balance text-muted-foreground">
                                    Have a question? Fill out the form below.
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message"
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                    <div className="relative hidden rounded-l-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black dark:from-black dark:via-zinc-900 dark:to-zinc-800 md:block overflow-hidden">
                        {/* Masculine hex pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%),linear-gradient(-30deg,transparent_24%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%)] bg-[length:40px_40px]"></div>
                        </div>

                        {/* Subtle animated overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-red-500/3 to-amber-500/3 animate-pulse"></div>

                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="group relative w-52 h-44 cursor-pointer">
                                {/* Masculine terminal interface */}
                                <div className="relative w-full h-full bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 backdrop-blur-sm rounded-lg shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 ease-out border border-zinc-700/60 group-hover:border-orange-500/60 group-hover:shadow-orange-500/25">

                                    {/* Terminal header with masculine styling */}
                                    <div className="absolute top-0 left-0 w-full h-7 bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-t-lg border-b border-zinc-600 flex items-center px-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-sm"></div>
                                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm"></div>
                                        </div>
                                        <div className="ml-3 text-xs text-zinc-200 font-mono font-semibold">TERMINAL v2.1</div>
                                        <div className="ml-auto text-xs text-zinc-400 font-mono">root@dev</div>
                                    </div>

                                    {/* Terminal content area */}
                                    <div className="absolute top-7 left-2 right-2 bottom-2 bg-gradient-to-br from-black/80 to-zinc-900/80 rounded-sm border border-zinc-600/40">
                                        <div className="p-3 h-full flex flex-col justify-between">
                                            <div className="space-y-1.5">
                                                <div className="text-orange-400 text-sm font-mono font-medium">$ ./contact --init --secure</div>
                                                <div className="text-green-400 text-xs font-mono">[OK] Authentication server started</div>
                                                <div className="text-zinc-300 text-xs font-mono">[INFO] Listening on port 443 (HTTPS)</div>
                                                <div className="text-amber-400 text-xs font-mono animate-pulse">[READY] Awaiting secure connection...</div>
                                            </div>
                                            
                                            {/* Status bar */}
                                            <div className="flex items-center justify-between border-t border-zinc-700/50 pt-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs text-zinc-300 font-mono font-medium">SECURE</span>
                                                </div>
                                                <div className="text-xs text-zinc-500 font-mono">22:47:33</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Masculine accent elements */}
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform rotate-45"></div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-sm opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>

                                    {/* Masculine glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Masculine tooltip */}
                                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-zinc-900/95 backdrop-blur-sm px-4 py-2 rounded-md border border-zinc-700/60 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-zinc-200 font-mono font-medium shadow-xl">
                                    [SYSTEM] Secure connection ready
                                </div>
                            </div>
                        </div>

                        {/* Masculine background elements */}
                        <div className="absolute top-6 right-6 w-20 h-20 border border-orange-500/20 rounded-sm opacity-40 animate-pulse transform rotate-45"></div>
                        <div className="absolute bottom-6 left-6 w-16 h-16 border border-amber-500/20 rounded-sm opacity-30 transform rotate-12 animate-pulse"></div>

                        {/* Masculine particles */}
                        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-red-500 rounded-full animate-ping delay-1000"></div>
                        <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-amber-500 rounded-full animate-ping delay-500"></div>

                        {/* Masculine status indicator */}
                        <div className="absolute bottom-4 right-4 text-xs text-zinc-500 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 font-mono font-semibold">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-zinc-300">ONLINE</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {alertDescription}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
