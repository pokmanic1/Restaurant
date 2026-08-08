'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const BlueButon = () => {
    return (
        <MotionLink
            href="/meniu/pizza"

            whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", damping: 7, stiffness: 300 }}
            className="inline-block bg-[#00043B] hover:bg-[#0c005e] text-[10px] sm:text-[14px] md:text-[16px] text-white font-serif px-3 sm:px-4 md:px-5 lg:px-6 py-1 rounded border border-blue-400/30 transition-colors"
        >
            Vezi mai mult
        </MotionLink>
    );
};

export default BlueButon;