"use client"
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";
import Image from 'next/image';
import { signUserOut } from '@/app/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';

const contentlist = [
    // {name:'dashboard', href:''},
    // {name:'Payment', href:''},
    // {name:'Teachers & Mentors', href:''},
    { name: 'Settings', href: '' },
    // {name:'Help & feedback', href:''},
    // {name:'About', href:''},
    // {name:'T&C', href:''},
];

export default function ProfilePage() {
    const [data, setData] = useState<Session | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="font-semibold h-[90vh] flex flex-col justify-center">
            <div className=' flex flex-col   items-center my-4'>
                <div className=" flex items-center mx-2 md:mx-6">
                    <Image className='rounded-full w-44 ' src='/default_profile.svg'
                        width={100} height={100} alt='session user profile picture' />
                </div>
                <span className=' text-4xl'>{data?.user?.name}</span>
                <span>{data?.user?.email}</span>

            </div>

            <div className='flex flex-col gap-10 justify-center p-10 items-center'>
                <div className='flex items-center justify-center flex-col gap-4'>
                    {contentlist.map((cont, index) => (
                        <Link href={cont.href} key={index}

                            className="flex justify-center rounded-sm w-full mx-4 items-center">
                            <span className=' w-28 p-3 hover:bg-indigo-700 hover:text-white transition-all ease-linear rounded-full hover:shadow-xl duration-100 bg-slate-700/70 text-white  text-center'>
                                {cont.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <div >
                    <button onClick={()=> signUserOut()} className='flex rounded-full bg-red-600 font-xl w-28 text-white hover:bg-red-500 items-center justify-center gap-2 p-3  transition-all duration-100 ease-linear hover:shadow-xl hover:text-white'>
                        <PowerIcon className='w-8'/>
                        <span className=' whitespace-nowrap'>Sign Out</span>
                    </button>
                </div>
                

            </div>

        </div>

    );
}
