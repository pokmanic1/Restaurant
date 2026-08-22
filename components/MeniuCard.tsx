import React from 'react';
import Image from 'next/image';
import { BlueButon } from '@/components/Buton';

interface MenuCardProps {
    title: string;
    image: string;
    link: string;
    order: number;
    isActive: boolean;
    isVisible: boolean;
}

export const MenuCard = ({
    title,
    image,
    link,
    order,
    isActive,
    isVisible,
}: MenuCardProps) => {
    return (
        <div
            style={{ order }}
            className={`card col-center w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5 text-white border border-gray-700 rounded-lg px-1 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6 shadow-2xl hover:border-white/20 hover:bg-white/10
                ${isVisible ? 'flex' : 'hidden'}
                ${isActive ? 'scale-105 z-10' : 'scale-75 opacity-70'}`}
                >
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
                {title}
            </h2>

            <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px] mb-6 overflow-hidden rounded border border-gray-600">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <BlueButon continut="Vezi mai mult" link={link} />
        </div>
    );
};