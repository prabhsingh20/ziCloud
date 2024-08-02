import {
  BookmarkIcon,
  BriefcaseIcon,
  CalendarDateRangeIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  VideoCameraIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hide-scrollbar flex h-screen w-24 flex-col justify-between overflow-scroll px-4 py-6 text-center text-sm text-secondaryText">
      <div>
        <header>
          <Link to="/">
            <h1 className="font-rajdh text-4xl font-semibold">CH</h1>
          </Link>
        </header>
        <nav className="mt-16">
          <ul className="space-y-8">
            <li>
              <Link to="allChats" className="flex flex-col items-center gap-1">
                <span>
                  <ChatBubbleLeftRightIcon className="h-6" />
                </span>
                All chats
              </Link>
            </li>
            <li>
              <Link to="work" className="flex flex-col items-center gap-1">
                <span>
                  <BriefcaseIcon className="h-6" />
                </span>
                Work
              </Link>
            </li>
            <li>
              <Link
                to="meet"
                className="flex flex-col items-center gap-1 border-b-[1px] border-secondaryText pb-8"
              >
                <span>
                  <VideoCameraIcon className="h-6" />
                </span>
                Meet
              </Link>
            </li>
            <li>
              <Link to="calender" className="flex flex-col items-center gap-1">
                <span>
                  <CalendarDateRangeIcon className="h-6" />
                </span>
                Calender
              </Link>
            </li>
            <li>
              <Link to="rating" className="flex flex-col items-center gap-1">
                <span>
                  <ChartBarIcon className="h-6" />
                </span>
                Rating
              </Link>
            </li>
            <li>
              <Link to="saved" className="flex flex-col items-center gap-1">
                <span>
                  <BookmarkIcon className="h-6" />
                </span>
                Saved
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-24">
        <Link to="settings" className="flex flex-col items-center gap-1">
          <span>
            <Cog6ToothIcon className="h-6" />
          </span>
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
