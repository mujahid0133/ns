import Image from "next/image";
import { Protest_Guerrilla } from "next/font/google";
import Nav from "@/components/elements/Nav";
import { Separator } from "@radix-ui/react-separator";

const sofadi_one = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <div className="w-16 h-screen bg-red-500 flex flex-col items-center py-4">
        <span className={`${sofadi_one.className} text-white text-2xl`}>NS</span>
        <span className="text-white text-sm">Home</span>
      </div>
      {/* <div className="bg-green-500 h-16 w-full fixed top-0">
        
      </div> */}
    </>
  );
}
