import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { useChat } from "../ChatProvider";

function Header() {
  const { handleOpen } = useChat();
  return (
    <header
      className="flex cursor-pointer items-center justify-between"
      onClick={handleOpen}
    >
      <div className="flex flex-col ">
        <h2 className="text-lg text-headerText">Office chat</h2>
        <p className="text-sm text-primaryText">45 members, 24 online</p>
      </div>
      <div className="flex gap-8 text-secondaryText">
        <MagnifyingGlassIcon className="h-6" />
        <PhoneIcon className="h-6" />
        <EllipsisVerticalIcon className="h-6" />
      </div>
    </header>
  );
}

export default Header;
