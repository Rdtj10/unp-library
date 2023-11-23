const Cari = () => {
    return(
    <div className='pt-10 flex flex-col h-full justify-center items-center'>
      {/* Kontainer 1 */}
        <div className="relative p-5 w-1/3 bg-[#1a409a] shadow-slate-800 shadow-lg hover:transition-shadow hover:duration-300 hover:shadow-xl hover:shadow-slate-900 rounded-lg">
            <div className="p-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl mb-5 text-white font-bold">Cari E-book</h1>
                <div className="flex flex-col space-y-4 max-w-xl">
                    <input
                    type="text"
                    placeholder="Judul Ebook"
                    className="border p-2 rounded w-96"
                    />
                    <input
                    type="text"
                    placeholder="Kategori"
                    className="border p-2 rounded w-96"
                    />
                    <input
                    type="text"
                    placeholder="Fakultas"
                    className="border p-2 rounded w-96"
                    />
                    <input
                    type="number"
                    placeholder="Tahun Terbit"
                    className="border p-2 rounded w-96"
                    />
                    <button
                    className="bg-[#ff9600] hover:bg-[#bc7005] hover:shadow-inner text-white font-bold py-2 px-4 rounded"
                    >
                    Cari
                    </button>
                </div>
            </div>    
        </div>
    </div>
    );
}

export default Cari;