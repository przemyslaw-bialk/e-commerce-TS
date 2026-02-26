import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-10 bg-emerald-800">
      <div className="bg-red-300">Navigation</div>
      <div className="bg-green-300">{children}</div>
    </div>
  );
};

export default Layout;
