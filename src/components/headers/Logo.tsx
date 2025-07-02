// import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-fit max-w-[140px] overflow-hidden">
      <Link href={'/'} className="flex items-center justify-cente gap-2 w-full">
        {/* <figure className="block hover:opacity-80 transition">
          <Image
            src="/images/grayhales_log.png"
            alt="KeySystem Logo"
            width={184}
            height={46}
            className="w-10 h-10 md:w-12 md:h-12 aspect-square object-contain object-center"
          />
        </figure> */}
        <div className="font-jakarta text-[16.26px] md:text-[20px] font-semibold text-white">
          Monica G.
        </div>
      </Link>
    </div>
  );
};

export default Logo;
