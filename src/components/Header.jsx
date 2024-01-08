import React from 'react';
import MenuItem from './MenuItem';
import { FaHome } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={IoInformationCircleOutline}
        />
      </div>
      <div className="flex">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-2">
              IMDB
            </span>
            <span className="hidden text-xl sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
