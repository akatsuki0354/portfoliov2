import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import ContactAnimation from './contact-animation'
import { useContactForm } from '@/hooks/useContactForm'
export function ContactLayouts({ className, ...props }: React.ComponentProps<"div">) {
    const {
        message,
        setMessage,
        name,
        setName,
        email,
        setEmail,
        showAlert,
        setShowAlert,
        alertTitle,
        alertDescription,
        isSubmitting,
        isClient,
        SubmitData,
    } = useContactForm();

    
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
                    <ContactAnimation />
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
