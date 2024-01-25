// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link legacyBehavior href="/">
                <a className="flex-shrink-0 flex items-center hover:bg-green-100">
                  <img
                    className="h-32 w-auto sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                    src="/logo.png"
                    alt="Logo de Community Lab Alliance"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link legacyBehavior href="/inicio">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Inicio
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Busco Soluciones
                </a>
              </Link>
              <Link legacyBehavior href="/brindo-soluciones">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Brindo Soluciones
                </a>
              </Link>
              <Link legacyBehavior href="/nosotros">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Nosotros
                </a>
              </Link>
              <Link legacyBehavior href="/blog">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Blog
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link legacyBehavior href="/login">
                <a className="text-gray-900 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out hover:bg-green-100">
                  Iniciar Sesión
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
    );
};

export default Navbar;
