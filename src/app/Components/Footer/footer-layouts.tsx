
import { Button } from "@/components/ui/button"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function FooterLayouts() {
    return (
        <footer className="bg-background py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    <div className="mb-8 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Instagram className="h-4 w-4" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </div>

                    <div className="text-center">

                        <p className="text-sm lg:text-xl text-muted-foreground">
                            © 2025 Franco Gregorio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}