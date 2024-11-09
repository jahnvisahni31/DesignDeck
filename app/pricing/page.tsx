"use client"
import { FaCheckCircle } from "react-icons/fa";
import NavbarComponent from "../front-navbar";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import Footer from "@/components/ui/footer";

export default function Pricing(){

    const {loggedIn} = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <NavbarComponent
            isLoggedIn={loggedIn}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            />

            <div className="h-screen flex justify-center items-center ">
                <div className="grid lg:grid-cols-3 gap-3">
                    <div className=" p-4  border-[2px] border-red-500 lg:mt-[150px]">
                        <div className="text-xl font-mono text-center my-4">Free</div>
                        <div className="text-center text-3xl font-bold mb-4">0 $/m</div>
                        <div className="flex justify-center bg-red-500 mx-14 py-3 rounded-md mb-4"><button>Join Now</button></div>
                        <div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Free access to basic tools</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Basic Collaboration Tools</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Community Support</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>2 GB Storage</div>
                        </div>
                    </div>
                    <div className="p-4  border-[2px] border-yellow-500 lg:mt-[150px]">
                        <div className="text-xl font-mono text-center my-4">Basic</div>
                        <div className="text-center text-3xl font-bold mb-4">8 $/m</div>
                        <div className="flex justify-center bg-yellow-500 mx-14 py-3 rounded-md mb-4"><button>Join Now</button></div>
                        <div className="">
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Unlimited Projects</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Advanced Collaboration Tools</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Priority Support</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>10 GB Storage</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Private Templates</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Version History</div>
                        </div>
                    </div>
                    <div className="p-4  border-[2px] border-green-500 lg:mt-[150px]">
                        <div className="text-xl font-mono text-center my-4">Pro</div>
                        <div className="text-center text-3xl font-bold mb-4">15 $/m</div>
                        <div className="flex justify-center bg-green-500 mx-14 py-3 rounded-md mb-4"><button>Join Now</button></div>
                        
                        <div>
                        <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Unlimited Projects</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Premium Collaboration Tools</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>24/7 Dedicated Support</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Unlimited Storage</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Custom Templates and Workflows</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Advanced Analytics & Reporting</div>
                            <div className="flex"><FaCheckCircle className="mx-2 h-5 w-5"/>Enterprise Security</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}