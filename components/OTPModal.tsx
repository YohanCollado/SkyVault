"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import React from "react";
import {Button} from "@/components/ui/button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useRouter } from "next/navigation";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";


const OTPModal = ({accountId, email}: {accountId: string; email: string}) => {
    const router = useRouter();
    const[isOpen, setIsOpen] = useState(true);
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const handleSubmit = 
    async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);

        //in this try we will call an API to veriyf the OTP, under thi will ve the API to verify the user
        try {
            const sessionId = await verifySecret ({accountId, password});

            if (sessionId) router.push("/");
        } catch (error){
            console.log("Failed to verify OTP", error);
        } 
        setIsLoading(false)

    };
    
    const handleResendOtp = async () => {
        // call api to resend OTP
        await sendEmailOTP ({email});
    };

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
                        <AlertDialogDescription className="subtitle-2 text-center text-light-100">
                            Code has been sent to <span className="pld-1 text-brand">{email}</span>
                        </AlertDialogDescription>
                </AlertDialogHeader>
                        <InputOTP maxLength={6} value={password} onChange={setPassword}>
                        <InputOTPGroup className="shad-otp">
                            <InputOTPSlot index={0} className="shad-otp-slot"/>
                            <InputOTPSlot index={1} className="shad-otp-slot"/>
                            <InputOTPSlot index={2} className="shad-otp-slot"/>
                            <InputOTPSlot index={3} className="shad-otp-slot"/>
                            <InputOTPSlot index={4} className="shad-otp-slot"/>
                            <InputOTPSlot index={5} className="shad-otp-slot"/>
                        </InputOTPGroup>
                    </InputOTP>
                    <AlertDialogFooter>
                        <div className="flex w-full flex-col gap-4">
                            <AlertDialogAction 
                                onClick={handleSubmit} 
                                className="shad-submit-btn h12" 
                                type="button">Submit
                                { isLoading && (
                                    <div className="flex item-center gap-2 ml-2 animate-spin">
                                        <AutorenewIcon/>
                                    </div>
                                )}
                            </AlertDialogAction>
                            <div className="subtitle-2 mt-2 text-center text-light-100">
                                Didn`&apos;t get a code?
                                <Button 
                                type="button" 
                                variant="link" 
                                className="pl-1 text-brand" 
                                onClick={handleResendOtp}
                                >
                                    Resend Code
                                </Button>
                            </div>
                        </div>
                    </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default OTPModal;