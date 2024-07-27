"use client"
import Link from "next/link"
import { BsEnvelopeOpen } from "react-icons/bs";

export default function Home() {

  const open = ()=> {
    console.log('ini di klik')
    localStorage.setItem('token', 'buka')

  }
  return (
    <div className=" h-screen bg-[url('../public/img/bg_welcome.jpg')] bg-cover bg-center content-center text-center  mx-auto">
      <div className=" rounded-lg backdrop-blur-sm shadow-lg w-[90%] md:w-[50%]  mx-auto">
        <h2 className=" text-[20px] md:text-[24px] mt-3 mb-0 ">you are invited to our wedding</h2>
        <h1 className="text-[50px] md:text-[64px]">Putra & Putri</h1>
        <p className="text-[20px]">Rabu, 29 November 2024</p>

        <div className="w-[60%] rounded-lg backdrop-blur-lg shadow-lg py-1 mt-3 mx-auto">
          <p>Kepada Yth. Bpk/Ibu/Saudara/i</p>
          <p className="text-[20px]"> Romeo</p>
          <p className="">di tempat</p>
        </div>
       <div className="flex text-center place-content-center ">
       <Link href={"/hero"}>
          <button onClick={open} className="border backdrop-blur-lg hover:bg-white rounded-lg py-2 mb-2 mt-2 px-5 mx-auto flex">
          <BsEnvelopeOpen className="flex mt-1 mr-2" />
            Buka Undangan
          </button>
        </Link>
       </div>
       
      </div>
      {/* <Image
        className="w-[50%] md:w-[20%] bunga-bwh bottom-[50px] md:bottom-[60px] z-[-1]  mx-auto "
        alt={"pp"}
        src={bgwl}
      ></Image> */}
    </div>
  );
}
