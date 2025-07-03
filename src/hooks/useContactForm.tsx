import { useState, useEffect } from 'react';
import { ContactForm } from '@/app/Components/Contact/contact-data';

export function useContactForm() {
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
        e.preventDefault();
        if (!isClient) return;

        setIsSubmitting(true);

        try {
            await ContactForm(name, email, message);
            setAlertTitle("Success!");
            setAlertDescription("Your message has been sent successfully. I'll get back to you soon!");
            setShowAlert(true);
            setEmail("");
            setName("");
            setMessage("");
        } catch {
            setAlertTitle("Error");
            setAlertDescription("Failed to send your message. Please try again later.");
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
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
    };
} 