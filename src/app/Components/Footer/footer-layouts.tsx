import { Button } from "@/components/ui/button"

import { Facebook, Instagram, MailIcon } from "lucide-react"

export default function FooterLayouts() {
    return (
        <footer className="bg-background py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    <div className="mb-5 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href="https://www.facebook.com/franco.0354">
                                <Facebook className="h-4 w-4" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href="mailto:francogregorio2004@gmail.com">
                                <MailIcon className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href="https://www.instagram.com/bespin_tv/?next=%2F">
                                <Instagram className="h-4 w-4" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </Button>
                    </div>

                    <div className="text-center flex  flex-col gap-3 text-sm lg:text-xl text-muted-foreground">
                        <p>
                            +63 954-992-2404
                        </p>
                        <p>
                            © 2025 Franco Gregorio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}