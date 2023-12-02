import { NavLink } from "react-router-dom";
import { setIsAuth } from "../../store/reducers/auth";
import { useDispatch } from "react-redux";
import { persistor } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className=" w-screen px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <img src="/logo.png" className=" h-11  sm:h-9" alt="Flowbite Logo" />
          <div className="flex items-center lg:order-2">
            <button
              href="#"
              onClick={() => {
                persistor.purge();
                return dispatch(setIsAuth());
              }}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Log out{" "}
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/choose-team"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Teams
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
