import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 shadow">
      <div className="flex items-center">
        <img src="https://media.licdn.com/dms/image/D4D0BAQEyN33xZ31Bbw/company-logo_200_200/0/1687299738804/insaid_logo?e=2147483647&v=beta&t=i3iBCJnxOmYwt9t01S_ErkGCl44TgDtwtWCragdFwaw" alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-700 font-bold">Refer</a></li>
        <li><a href="#" className="text-gray-700 font-bold">Benefits</a></li>
        <li><a href="#" className="text-gray-700 font-bold">FAQs</a></li>
        <li><a href="#" className="text-gray-700 font-bold">Support</a></li>
      </ul>
      <div className="flex space-x-4">
        <button className="border-2 border-gray-700 text-gray-700 px-4 py-2">Login</button>
        <button className="bg-green-500 text-white px-4 py-2">Try for free</button>
      </div>
    </nav>
  );
}

export default Navbar;
