import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../../utils/logo.png';
import { createOrGetUser } from '../../utils';
import useAuthStore from '../../store/authStore';

export const Navbar = () => {
  const { userProfile, addUser } = useAuthStore();
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[70px] md:w-[90px] md:h-[80px]">
          <Image className="cursor-pointer" src={Logo} alt="logo" layout="responsive" />
        </div>
      </Link>
      <div>search</div>
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => 'error'}
          />
        )}
      </div>
    </div>
  );
};
