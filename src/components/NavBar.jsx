"use client"
import a from "next/a"
import Image from "next/image"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import Logo from "./Logo";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-10 w-full top-0 flex flex-wrap items-center justify-between bg-gray min-h-[65px]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="flex font-semibold gap-2 items-center mr-4 py-2 whitespace-nowrap  "
              href={"/"}
            >
              <Logo height={50} width={50} />
            </a>
            <button
              className=" cursor-pointer text-xl leading-none py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <AiOutlineClose className="text-4xl text-primary" /> : <FaBars className="text-3xl text-primary" />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex justify-end w-full flex-col lg:flex-row list-none lg:ml-auto gap-3">
              <li className="nav-item">
                <a
                  className="py-2 flex items-center   font-bold leading-snug  opacity-80 hover:opacity-100 "
                  href={"/"}
                >
                  <span className=" py-2">Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center   font-bold leading-snug  opacity-80 hover:opacity-100 "
                  href={"/"}
                >

                  <span className=" py-2">Sobre Nosotros</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center   font-bold leading-snug  opacity-80 hover:opacity-100 "
                  href={"/"}
                >

                  <span className="py-2">Proyectos</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center   font-bold leading-snug  opacity-80 hover:opacity-100 "
                  href={"/"}
                >

                  <span className=" py-2 bg-primary text-white rounded-md px-2">Contáctanos {"=>"}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};  