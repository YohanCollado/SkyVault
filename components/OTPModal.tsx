"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import React from "react";
import {Button} from "@/components/ui/button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const OTPModal = () => {
    const[isOpen, setIsOpen] = useState(true);
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const handleSubmit = 
    async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);

        //in this try we will call an API to veriyf the OTP
        try {
            

        } catch (error){
            console.log("Failed to verify OTP", error);
        } 
        setIsLoading(false)

    };
    
    const handleResendOtp = async () => {
        // call api to resend OTP
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="shad-alert-dialog">
                <AlertDialogHeader className="relative flex justify-center">
                    <AlertDialogTitle className="h2 text-center">
                        Enter your OTP
                        <button onClick={() => setIsOpen(false)}
                            aria-label="Close modal"
                            className="otp-close-button"
                        >
                            <IoMdClose className="h-8 w-8" />
                        </button>
                    </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            from our servers.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                    </AlertDialogContent>
        </AlertDialog>
    )
}
export default OTPModal;