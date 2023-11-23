import SearchBar from "./SearchBar";

const Header = () => {
  return (
      <nav className="bg-[#1A409A] text-white h-fit py-2 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center ">
              <div className='p-3'>
                <img className="w-16 h-16" src="https://elearning2.unp.ac.id/pluginfile.php/1/theme_adaptable/logo/1685924761/logo%20UNP%20%281%29.png" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">UPT PERPUSTAKAAN</h1>
                <h1 className="text-md text-[#ff9600]">Universitas Negeri Padang</h1>
              </div>
            </div>
            <div>
              <SearchBar/>
            </div>
          </div>
        </div>
      </nav>
  );
};
export default Header;