import Image from "next/image";

const Avatar = () => {
  return (
   <div className="
  relative 
  w-[250px] h-[250px] 
  sm:w-[300px] sm:h-[300px]
  md:w-[400px] md:h-[400px]
  lg:w-[500px] lg:h-[500px]
  xl:w-[650px] xl:h-[650px]
">
  <Image
    src="/avatar.png"
    alt="Rohit Singh"
    width={550}
    height={450}
    className="object-contain"
    priority
  />
</div>
  );
};

export default Avatar;