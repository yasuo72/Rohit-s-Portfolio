import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="Rohit Singh"
        fill
        className="object-contain object-bottom"
        priority
        sizes="(max-width: 1280px) 500px, 737px"
      />
    </div>
  );
};

export default Avatar;