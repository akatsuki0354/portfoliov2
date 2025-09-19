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
                    <div className="relative hidden rounded-l-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 md:block overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-10 dark:opacity-20">
                            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse"></div>
                            <div className="absolute top-12 right-8 w-1 h-1 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-ping"></div>
                            <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-400 dark:bg-purple-300 rounded-full animate-bounce"></div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="group relative w-36 h-28 cursor-pointer">
                                {/* Main envelope with enhanced 3D effect */}
                                <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out border border-gray-200 dark:border-slate-600">

                                    {/* Envelope flap with gradient */}
                                    <div className="absolute top-0 left-0 w-full h-0 border-l-[72px] border-r-[72px] border-b-[36px] border-l-transparent border-r-transparent border-b-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600"></div>

                                    {/* Envelope body with subtle texture */}
                                    <div className="absolute top-9 left-3 w-30 h-18 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 border-2 border-gray-300 dark:border-slate-500 rounded-sm shadow-inner dark:shadow-inner"></div>

                                    {/* Letter inside with animated content */}
                                    <div className="absolute top-11 left-5 w-26 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border border-blue-200 dark:border-slate-500 rounded-sm shadow-sm dark:shadow-md group-hover:shadow-md dark:group-hover:shadow-lg transition-shadow duration-300">
                                        <div className="p-2">
                                            <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-400 dark:to-indigo-400 rounded mb-1.5 animate-pulse"></div>
                                            <div className="w-4/5 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-400 dark:to-indigo-400 rounded mb-1.5"></div>
                                            <div className="w-3/5 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-400 dark:to-indigo-400 rounded mb-1.5"></div>
                                            <div className="w-2/5 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-400 dark:to-indigo-400 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Interactive seal/stamp */}
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 rounded-full shadow-md dark:shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white dark:bg-slate-200 rounded-full opacity-80"></div>
                                    </div>

                                    {/* Decorative elements with hover effects */}
                                    <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 shadow-lg dark:shadow-xl"></div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 dark:from-green-300 dark:to-green-400 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 shadow-lg dark:shadow-xl"></div>

                                    {/* Subtle shine effect */}
                                    <div className="absolute top-1 left-1 w-8 h-8 bg-gradient-to-br from-white to-transparent dark:from-slate-200 dark:to-transparent rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </div>

                                {/* Floating message indicator */}
                                {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-lg dark:shadow-xl border border-gray-200 dark:border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-600 dark:text-gray-300 font-medium">
                                   Thanks for Visiting my portfolio
                                </div> */}
                            </div>
                        </div>

                        {/* Enhanced background decorative elements */}
                        <div className="absolute top-6 right-6 w-20 h-20 border-2 border-dashed border-blue-300 dark:border-blue-400 rounded-full opacity-40 animate-spin-slow"></div>
                        <div className="absolute bottom-6 left-6 w-16 h-16 border border-blue-300 dark:border-blue-400 rounded-lg opacity-40 transform rotate-45 animate-pulse"></div>

                        {/* Floating particles */}
                        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-ping delay-1000"></div>

                        {/* Contact info overlay */}
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full animate-pulse"></div>
                                I will respond soon.
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
