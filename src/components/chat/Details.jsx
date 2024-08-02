import {
  BellIcon,
  CalendarDateRangeIcon,
  ChartBarIcon,
  VideoCameraSlashIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Details() {
  const [allFiles, setAllFiles] = useState(false);
  const [allMedia, setAllMedia] = useState(false);

  return (
    <aside className="flex w-72 flex-col space-y-8 px-4 py-6 text-primaryText">
      <header className="flex items-center justify-between text-lg ">
        <h2>Chat Details</h2>
        <span>
          <XMarkIcon className="h-6 cursor-pointer" />
        </span>
      </header>
      <div className="flex  gap-4">
        <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3">
          <BellIcon className="h-6 rounded-2xl " />
        </span>
        <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3">
          <CalendarDateRangeIcon className="h-6" />
        </span>
        <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3">
          <ChartBarIcon className="h-6" />
        </span>
        <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3 text-errorRed">
          <VideoCameraSlashIcon className="h-6" />
        </span>
      </div>

      <section className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between text-[17px]">
          <div className="flex items-center gap-2">
            <h2>Photos and Vidos</h2>
            <span className="text-sm text-secondaryText">164</span>
          </div>
          <p
            onClick={() => setAllMedia(!allMedia)}
            className="cursor-pointer text-sm text-secondaryText underline"
          >
            See all
          </p>
        </div>

        <div className=" flex flex-wrap gap-3">
          <img src="/Foltyn.jpg" alt="media" className="h-24 rounded-2xl" />
          <img src="/Foltyn.jpg" alt="media" className="h-24 rounded-2xl" />
          {allMedia && (
            <img src="/Foltyn.jpg" alt="media" className="h-24 rounded-2xl" />
          )}
        </div>
      </section>

      <section className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between text-[17px]">
          <div className="flex items-center gap-2">
            <h2>Shared Files</h2>
            <span className="text-sm text-secondaryText">1384</span>
          </div>
          <p
            onClick={() => setAllFiles(!allFiles)}
            className="cursor-pointer text-sm text-secondaryText underline"
          >
            See all
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3 ">
              <DocumentTextIcon className="h-6" />
            </span>
            <p className="text-sm">
              Contract for the provision of priting services
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3 ">
              <DocumentTextIcon className="h-6" />
            </span>
            <p className="text-sm">
              Contract for the provision of priting services
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3 ">
              <DocumentTextIcon className="h-6" />
            </span>
            <p className="text-sm">
              Contract for the provision of priting services
            </p>
          </div>

          {allFiles && (
            <div className="flex items-center gap-4">
              <span className="cursor-pointer rounded-2xl bg-chatAreaBackground p-3 ">
                <DocumentTextIcon className="h-6" />
              </span>
              <p className="text-sm">
                Contract for the provision of priting services
              </p>
            </div>
          )}
        </div>
      </section>
    </aside>
  );
}

export default Details;
