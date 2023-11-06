// function Navbar () {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-3xl font-bold text-white">Your Logo</div>
//         <ul className="flex space-x-6">
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import Button from '../../components/atoms/Button';

// function Navbar() {
//   return (
//     <header className="py-2 bg-transparent">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-12">
//           <a aria-label="Home" href="#">
//             <img
//               src="https://talenesia.com/landing_assets/images/logo.png"
//               alt="Home"
//               className="h-10 w-auto"
//             />
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#features"
//           >
//             Features
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#testimonials"
//           >
//             Testimonials
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#pricing"
//           >
//             Pricing
//           </a>
//         </div>
//         <div className="flex items-center space-x-8">
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="/login"
//           >
//             Sign in
//           </a>
//           <Button color="#22897D" text="Get started today" />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

function Navbar () {
  return (
    <header className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center md:space-x-12">
            <a aria-label="Home" href="#">
              <img
                src="https://talenesia.com/landing_assets/images/logo.png"
                alt="Home"
                className="h-10 w-auto"
              />
            </a>

          </div>
          <div className="flex items-center space-x-8 md:space-x-8">
            <a className=" text-slate-700 hover:text-blue-200 font-semibold" href="#home">
              Home
            </a>
            <a
              className="text-slate-700 hover:text-blue-200 font-semibold"
              href="#course"
            >
              Course
            </a>
            <a className="text-slate-700 hover:text-blue-200 font-semibold" href="#ourteacher">
              Our Teacher
            </a>
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-600 text-white hover:text-slate-100 hover:bg-teal-600 active:bg-teal-800 active:text-blue-100 focus-visible:outline-teal-600"
              href="/register"
            >
              <span>Login</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
