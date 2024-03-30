import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import { PowerIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { signOut,auth } from '@/auth';
import {useSession } from 'next-auth/react';

export default function SideNav() {
  
  return (
    <div className="flex h-full flex-col  pb-4 ">
      <Link
        className="mb-2 flex  items-end justify-start  bg-violet-600  md:h-40"
        href="/dashboard"
      >
        <div className="flex w-40 text-white md:w-80 self-center">
          <MyClassLogoWhite />
          
        </div>
      </Link>

      <form action={async () => {
          'use server';
          const data = await auth()
          console.log(data?.user?.name);
        }} 
        >
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <QuestionMarkCircleIcon className="w-6" />
          <div className="hidden md:block"></div>
        </button>
      </form>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form action={async () => {
            'use server';
            await signOut();
          }} 
          >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
