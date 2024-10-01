"use client";

import { RoutesA } from "@/lib/interface";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const MainNav = (props: Props) => {
  const data = useSession();
  console.log(`🚀 ~ data:`, data.data?.user);
  const pathname = usePathname();

  const rountes: RoutesA[] = [
    {
      href: "/",
      label: "Me",
      active: pathname === "/",
    },
    {
      href: "/scan",
      label: "Scan",
      active: pathname === "/scan",
    },
    {
      href: "/chat",
      label: "Chat",
      active: pathname === "/chat",
    },
    {
      href: "/login",
      label: "Login",
      hide: data?.data?.user ? true : false,
      active: pathname === "/login",
    },
    {
      href: "/signUp",
      label: "signUp",
      hide: data?.data?.user ? true : false,
      active: pathname === "/signUp",
    },
    {
      href: "/shareQr",
      label: "shareQr",
      active: pathname === "/shareQr",
    },
  ];
  const showHideNavbar = (event: any) => {
    const navabar = document.getElementById("navbarSupportedContent1");
    if (navabar?.classList.contains("hidden")) {
      navabar?.classList.remove("hidden");
    } else {
      navabar?.classList.add("hidden");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center">
      {rountes.map((ele, i) =>
        ele.href === "/" ? (
          <li key={i}>
            <Link
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900  hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href={ele.href}
            >
              <Image
                src={` ${
                  data.data?.user?.image
                    ? data.data.user?.image
                    : "https://instagram.fnag1-4.fna.fbcdn.net/v/t51.2885-19/278989595_664165064810773_3556417570745100004_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fnag1-4.fna.fbcdn.net&_nc_cat=101&_nc_ohc=6cKhMqFLgWYAX9GJ10S&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBVtxk5NWc7Ag84tiuXvFjVtoepnQMrXwmDUQRwVC2wmQ&oe=64D95257&_nc_sid=ee9879"
                }`}
                height={40}
                width={40}
                className={`hover:border-primary ${
                  ele.active === true ? "border-primary" : ""
                } border-2 rounded-full `}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
          </li>
        ) : (
          <li
            key={i}
            className={`mb-4 lg:mb-0 lg:pr-2 ${ele.hide ? "hidden" : ""}`}
            data-te-nav-item-ref
          >
            <Link
              onClick={showHideNavbar}
              className={`${
                ele.active === true
                  ? "dark:text-primary text-primary"
                  : "dark:text-neutral-200"
              }  text-neutral-500 transition duration-200 active:text-primary hover:text-primary hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  dark:hover:text-primary  lg:px-2 [&.active]:text-primary dark:[&.active]:text-neutral-400`}
              href={ele.href}
              data-te-nav-link-ref
            >
              {ele.label}
            </Link>
          </li>
        )
      )}
    </div>
  );
};

export default MainNav;
