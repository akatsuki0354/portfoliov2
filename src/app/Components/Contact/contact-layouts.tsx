import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ContactForm } from './contact-data'
import { useState } from 'react'
export function ContactLayouts({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [message, setMessage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const SubmitData = (e: any) => {
        e.preventDefault()
        ContactForm(name, message, email)
        setEmail("")
        setName("")
        setMessage("")
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
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </div>
                    </form>
                    <div className="relative hidden rounded-l-2xl bg-muted md:block">
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
