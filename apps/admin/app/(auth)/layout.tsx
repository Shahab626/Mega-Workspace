import { FC, PropsWithChildren } from "react";
import Image from "next/image";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-4 w-full h-full grid grid-flow-col grid-cols-1 md:grid-cols-2 items-center  gap-4 bg-gray-100">
      <div className="hidden md:block justify-self-center border-r">
        <Image
          src="/images/login.jpg"
          className="rounded-3 h-auto"
          alt="login"
          width={646}
          height={756}
        />
      </div>

      {children}
    </div>
  );
};

export default Layout;
