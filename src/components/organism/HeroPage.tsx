import ProfileIcon from "@/assets/ProfileIcon.svg";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="max-h-screen max-w-screen flex flex-col justify-center p-52">
      <div className="flex flex-row items-center gap-1">
        <Image src={ProfileIcon} alt="Profile Icon" width={60} height={60} />
        <h1 className="text-3xl">
          rafael<span className="font-bold text-red-600">galdino</span>silva
        </h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[20em] font-bold">150k</h1>
        <span className="text-2xl">Linhas de código</span>
      </div>
    </div>
  );
};

export default HeroPage;
