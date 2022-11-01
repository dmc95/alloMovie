import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex sm:justify-end space-x-4 bg-yellow-400">
        {[
          ["Home", "/"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-yellow-300 hover:text-slate-700"
          key={url}
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
