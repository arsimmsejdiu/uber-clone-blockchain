import Image from "next/image";
import { shortenAddress } from "../utils/shortenedAddress";

import { BsPerson } from "react-icons/bs";
import avatar from "../temp/avatar.webp";

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 z-20`,
  leftMenu: `flex gap-3`,
  rightMenu: ` flex gap-3 items-center`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: ` text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  userImageContainer: `mr-2`,
  userImage: ` h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const currentAccount = "0xf8454d45b5a87f4836Da570B914f79A41F791409";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Arsim Sejdiu</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
            alt="Avatar Image"
          />
        </div>
        {currentAccount ? (
          <div>{shortenAddress(currentAccount)}</div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson />
            <div className={style.loginText}>Please log in</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
