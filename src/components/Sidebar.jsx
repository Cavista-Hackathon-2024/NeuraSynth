import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const Sidebar = ({ setCurrentView }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <Link to="/symptomchecker">
                <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <GiHealthNormal className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="ms-3">Symptom Checker</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <MdDashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/messages">
                <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <BiSolidMessageSquareDots className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Messages</span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-purple-500 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <div
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={() => setCurrentView("profile")}
                >
                  <FaUser className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </div>
              </Link>
            </li>

            <li>
              <Link>
                <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IoIosTime className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Appointments
                  </span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-purple-500 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
