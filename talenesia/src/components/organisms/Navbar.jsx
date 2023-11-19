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

function Navbar({index}) {
  return(
    <header className="flex justify-center py-3.5">
      <div className="w-[90%] flex justify-between items-center">
        <div className="logo">
          <div className="h-8">
            <a href="/">
              <img src="https://talenesia.com/landing_assets/images/logo.png" alt="Home" className="w-full h-full"/>
            </a>
          </div>
        </div>
        <div className="navbar flex gap-6 items-center text-sm pl-5">
          <div>
          {index === 0
              ? <p className="text-white rounded-full bg-[#143B75] py-1 px-3">Home</p>
              : <a href="/" className="hover:text-blue-300 rounded-full bg-transparent py-1 px-3">Home</a>
            }
          </div>
          <div>
            {index === 1
              ? <p className="text-white rounded-full bg-[#143B75] py-1 px-3">Kursus</p>
              : <a href="/course" className="hover:text-blue-300 rounded-full bg-transparent py-1 px-3">Kursus</a>
            }
          </div>
          <div>
          {index === 2
              ? <p className="text-white rounded-full bg-[#143B75] py-1 px-3">Pengajar</p>
              : <a href="/teacher" className="hover:text-blue-300 rounded-full bg-transparent py-1 px-3">Pengajar</a>
            }
          </div>
          <div>
            <a href="/login" className="rounded-full border border-transparent py-1.5 px-5 bg-teal-600 text-white hover:text-teal-600 hover:bg-white hover:border-teal-600 active:bg-teal-800 active:text-blue-100">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
