
const Navbar = () => {
    return (
      <nav className="border-b-2 border-gray-500 py-4 px-5 flex justify-between items-center">
        <h1 className="text-4xl uppercase italic text-slate-600 font-bold">
          Knowledge Cafe
        </h1>
        <img
          className="w-[50px] h-[50px]"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt="user_image"
        />
      </nav>
    );
};

export default Navbar;