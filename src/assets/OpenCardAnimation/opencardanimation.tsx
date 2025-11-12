import { motion } from "framer-motion";
import React, { useState } from "react";

const OpenCardAnimation: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[300px] h-[600px] cursor-pointer select-none" onClick={() => setOpen(!open)}>
            <motion.div
                className="rounded-xl overflow-hidden shadow-lg bg-[#14213d] flex"
                initial={{ width: 300 }}
                animate={open ? { width: 800 } : { width: 300 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
            >
                <div className="w-[300px] h-[700px]">
                    <img
                        src="/firefly-opencard.jpg"
                        alt="card"
                        className="w-full h-full object-cover"
                    />
                </div>
                {open && (
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="!p-6 text-white w-[300px] flex flex-col justify-center"
                    >
                        <span className="text-sm block relative bottom-[9rem] text-[22px] left-[5rem] font-bold">Firefly Stellaron Hunter</span>

                        <p className="!mb-2 relative text-[19px] left-[5rem] w-[20rem]">Born as a weapon, she's afflicted with the agony of Entropy Loss Syndrome due to genetic modification. She joined the Stellaron Hunters in search of the meaning of life, relentlessly pursuing ways to defy fate.</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default OpenCardAnimation;