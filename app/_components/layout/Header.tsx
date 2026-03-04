import AuthButtons from "@components/account/AuthButtons";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-1 relative ">
      <Logo />
      <Navigation />
      <AuthButtons />
    </header>
  );
}
