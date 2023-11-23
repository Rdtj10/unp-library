/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Number from "../components/Number";
import { useTypewriter } from "react-simple-typewriter";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
  //Typewriter
  const { text } = useTypewriter({
    words: ["About", "Contact"],
    loop: {},
    typeSpeed: 120,
  }); //Typewriter

  //Handler Buku
  const Books = [
    { title: "Buku 1", image: "/Buku1.jpeg" },
    { title: "Buku 2", image: "/Buku2.jpeg" },
    { title: "Buku 3", image: "/Buku3.png" },
    { title: "Buku 3", image: "/Buku3.png" },
    { title: "Buku 3", image: "/Buku3.png" },
    { title: "Buku 3", image: "/Buku3.png" },
    { title: "Buku 3", image: "/Buku3.png" },
  ]; //Handler Buku

  //Mitra Perpus
  const mitra = [
    { title: "UNP Repository", image: "/Unprepository.jpg", link: "/" },
    { title: "Cengage", image: "/Cengage.png", link: "/" },
    { title: "Ebsco", image: "/Ebsco.png", link: "/" },
    { title: "Garuda", image: "/Garuda.png", link: "/" },
    { title: "IET", image: "/Iet.png", link: "/" },
    { title: "Proquest", image: "/Proquest.png", link: "/" },
    { title: "Perpustakaan Nasional", image: "/perpusnas.svg", link: "/" },
    { title: "Open Acces Theses and Dissertations", image: "/oatd.jpeg", link: "/"},
    { title: "Internet Archive", image: "/internetarchive.png", link: "/" },
    { title: "Emerald Insight", image: "/emeraldinsight.png", link: "/" },
  ]; //Mitra Perpus

  //Berita
  const berita = [
    {
      title: "11 Nasehat Islam Untuk Para Akhwat (wanita)",
      date: "25 September 2023",
      image: "/Harimau.jpeg",
      link: "/berita1",
      author: "Idrizon, M.Kom",
    },
    {
      title: "Prediksi Teknologi Masa Depan ",
      date: "26 September 2023",
      image: "/monyet.jpeg",
      link: "/berita2",
      author: "Idrizon, M.Kom",
    },
    {
      title: "Teknologi Hologram ",
      date: "26 September 2023",
      image: "/monyet.jpeg",
      link: "/berita2",
      author: "Idrizon, M.Kom",
    },
  ]; //Berita

  return (
    //kontainerutama
    <div className=" flex flex-col h-full bg-white">
      {/* Kontainer 1 (sambutan) */}
      <div className="relative w-full">
        <div className="absolute flex inset-0 z-10 h-85 bg-black opacity-50 "></div>
        <img
          className="w-full h-85"
          src="/image_3.png"
          alt="Background Image"
        ></img>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 p-64">
          <h1 className="text-4xl font-bold transition-all duration-300 ease-in">
            Selamat Datang di Perpustakaan
          </h1>
          <h1 className="text-4xl font-bold mb-8">Universitas Negeri Padang</h1>
          <q className=" text-xl text-white text-justify">
            Alam Takambang Jadi Guru
          </q>
        </div>
      </div>

      {/* Kontainer 2 (layanan) */}
      <div className="relative w-full">
        <div className="flex w-full justify-between h-fit bg-[#1a409a] px-40 py-10">
          <div className="flex flex-col bg-[#1d356d] w-1/2 rounded-lg justify-center items-center text-center space-y-7 p-7">
            <div className="flex flex-row justify-center w-full h-60">
              <div className="flex flex-row w-full justify-between space-x-7 ">
                <div className="flex flex-col justify-center items-center p-8 w-3/5 h-full rounded-lg border-0 border-white transition-all duration-500 hover:bg-[#1a409a] hover:duration-500 hover:shadow-xl hover:transition-all cursor-pointer">
                  <img
                    src="icon/book.png"
                    className="w-20 h-20 hover: transition-all hover:duration-500 hover:-translate-y-5"
                  ></img>
                  <h1 className="text-white font-bold text-xl pt-4">E-book</h1>
                </div>
                <div className="flex flex-col justify-center items-center p-8 w-3/5 h-full rounded-lg border-0 border-white transition-all duration-500 hover:bg-[#1a409a] hover:duration-500 hover:shadow-xl hover:transition-all cursor-pointer">
                  <img
                    src="icon/digilib.png"
                    className="w-20 h-20 hover: transition-all hover:duration-500 hover:-translate-y-5"
                  ></img>
                  <h1 className="text-white font-bold text-xl pt-4">Digilib</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full h-60">
              <div className="flex flex-row w-full justify-between space-x-7 ">
                <div className="flex flex-col justify-center items-center p-8 w-3/5 h-full rounded-lg border-0 border-white transition-all duration-500 hover:bg-[#1a409a] hover:duration-500 hover:shadow-xl hover:transition-all cursor-pointer">
                  <img
                    src="icon/journal.png"
                    className="w-20 h-20 hover: transition-all hover:duration-500 hover:-translate-y-5"
                  ></img>
                  <h1 className="text-white font-bold text-xl pt-4">
                    E-Journal
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center p-8 w-3/5 h-full rounded-lg border-0 border-white transition-all duration-500 hover:bg-[#1a409a] hover:duration-500 hover:shadow-xl hover:transition-all cursor-pointer">
                  <img
                    src="icon/repo.png"
                    className="w-20 h-20 hover: transition-all hover:duration-500 hover:-translate-y-5"
                  ></img>
                  <h1 className="text-white font-bold text-xl pt-4">
                    Repository
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end">
            <h1 className="text-white text-center font-bold text-6xl mb-6">
              Layanan Digital
            </h1>
            <div className="bg-[#ff9600] h-1 w-full mb-7"></div>
          </div>
        </div>
      </div>

      {/* Kontainer 3 (berita) */}
      <div className="relative w-full">
        <div className="bg-white my-10 flex flex-col justify-center px-40 py-10">
          <h1 className="text-[#ff9600] text-center text-7xl mb-6">
            Informasi & Berita Terkini
          </h1>
          <div className="flex justify-center items-center">
            <div className="bg-[#1a409a] h-1 w-96 mb-20"></div>
          </div>

          {/* Berita */}
          <div className="w-full flex flex-col px-10">
            <h1 className="text-4xl pb-4 text-[#ff9600]">
              Berita Perpustakaan
            </h1>
            <div className="bg-[#1a409a] h-1 w-80"></div>
            <div className="bg-[#1a409a] h-0.5 w-full"></div>
          </div>
          <div className="bg-white flex flex-row mb-20 items-center w-full h-screen px-auto py-10">
            <div className="flex flex-col justify-center w-1/2 items-center pb-10 px-10">
              <div>
                <img
                  src="/berita1.jpeg"
                  className="object-cover w-auto h-1/3"
                />
                <div className="mt-5">
                  <Link href="/" className="text-xl font-bold">
                    UPT Perpustakaan UNP Hibahkan Buku untuk Taman Baca Nagari
                    Pasar Lama Muara Air Haji Pessel{" "}
                  </Link>
                  <p className="text-gray-400">
                    Sehubungan dengan Program Gemar Membaca yang dicanangkan
                    oleh Pemerintah RI maka UPT Perpustakaan UNP memenuhi
                    permintaan Hibah Buku untuk Taman Baca Nagari Pasar Lama
                    Muara
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 space-y-5">
              <div className="flex flex-row w-full h-32">
                <img src="/berita2.jpeg" className="h-full w-56" />
                <div className="flex flex-col pl-5">
                  <Link href="/" className="text-md font-bold">
                    Kepala UPT Perpustakaan & Percetakan UNP melakukan KUNKER ke
                    PERPUSNAS RI
                  </Link>
                  <p className=" text-gray-400 text-sm ">
                    ICBE ke 5 mengusung tema “Islamic Economic System, Halal
                    Industry & Governance in Accelerating the
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full h-32">
                <img src="/berita3.jpeg" className="h-full w-44" />
                <div className="flex flex-col pl-5">
                  <Link href="/" className="text-md font-bold">
                    Kunjungan Edukatif Madrasah Aliyah Al Hasanah Bengkulu{" "}
                  </Link>
                  <p className=" text-gray-400 text-sm ">
                    Syifa Fauzia ditetapkan sebagai peserta SIYLEP berdasarkan
                    Surat Keputusan Kepada Dinas Pemuda dan Olah Raga
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full h-32">
                <img src="/berita4.png" className="h-full w-56" />
                <div className="flex flex-col pl-5">
                  <Link href="/" className="text-md font-bold">
                    Kunjungan Library Touring dari SMK N 1 Talang Solok ke UPT
                    Perpustakaan UNP{" "}
                  </Link>
                  <p className=" text-gray-400 text-sm ">
                    Pada hari Kamis, tanggal 3 November 2022 sebanyak 70 orang
                    siswa/i SMKN 1 Talang Solok
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full h-32">
                <img src="/berita4.jpeg" className="h-full w-56 " />
                <div className="flex flex-col pl-5">
                  <Link href="/" className="text-md font-bold">
                    UPT Perpustakaan UNP Hibahkan Buku untuk Taman Baca Nagari
                    Pasar Lama Muara Air Haji Pessel{" "}
                  </Link>
                  <p className=" text-gray-400 text-sm ">
                    Sehubungan dengan Program Gemar Membaca yang dicanangkan
                    oleh Pemerintah RI maka UPT Perpustakaan UNP memenuhi
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Berita */}

          {/* Artikel */}
          <div className="w-full flex flex-col px-10">
            <h1 className="text-4xl pb-4 text-[#ff9600]">
              Artikel Civitas Akademika
            </h1>
            <div className="bg-[#1a409a] h-1 w-2/5"></div>
            <div className="bg-[#1a409a] h-0.5 w-full"></div>
          </div>
          <div className="flex flex-row overflow-x-auto p-10">
            {berita.map((item, index) => (
              <div
                key={index}
                className=" flex-shrink-0 w-60 h-80 bg-white mx-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gray-400 hover:transition-all hover:duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-1/2 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <div className="flex flex-col justify-between">
                    <div>
                      <Link
                        href="/"
                        className="text-lg font-bold mb-2 text-black"
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div>
                      <h1 className="text-md text-gray-400">
                        By: {item.author}
                      </h1>
                      <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="flex bg-[#1A409A] text-white w-fit px-5 ml-7 mb-20 rounded-full text-xl scale-75 transition-all duration-500 hover:shadow-xl over:transition-all hover:duration-500 hover:scale-100">
            <a>Read More</a>
          </button>
          {/* Artikel */}

          {/* Pengumuman */}
          <div className="w-full flex flex-col px-10">
            <h1 className="text-4xl pb-4 text-[#ff9600]">
              Pengumuman dan Agenda
            </h1>
            <div className="bg-[#1a409a] h-1 w-2/5"></div>
            <div className="bg-[#1a409a] h-0.5 w-full"></div>
          </div>
          <div className="w-full flex flex-row h-auto p-10 space-x-2">
            <div className="flex flex-col bg-gray-400 shadow-lg shadow-gray-600 h-96 w-1/2 rounded-xl space-y-5 p-2">
              <div className="flex flex-row h-1/4">
                <div className="h-full w-20 bg-black rounded-lg"></div>
                <div className="pl-4">
                  <Link href="/" className="text-lg font-bold">
                    Prosedur Kunjugan ke LayananPustaka Digital{" "}
                  </Link>
                  <p className="text-black text-sm">
                    SIlahkan unduh materi sosialisasi pada tautan berikut
                  </p>
                </div>
              </div>
              <div className="flex flex-row h-1/4">
                <div className="relative h-full w-20 bg-black rounded-lg"></div>
                <div className="pl-4">
                  <Link href="/" className="text-lg font-bold">
                    Permohonan Kerjasama{" "}
                  </Link>
                  <p className="text-black text-sm">Fakultas Ekonomi</p>
                </div>
              </div>
              <div className="flex flex-row h-1/4">
                <div className="h-full w-20 bg-black rounded-lg"></div>
                <div className="pl-4">
                  <Link href="/" className="text-lg font-bold">
                    Informasi Jadwal dan Jam OperasioanalPerpustakaan{" "}
                  </Link>
                  <p className="text-black text-sm">
                    Pedoman Kegiatan Pagelaran Mahasiswa Nasional Bidang
                    Teknologi, Informasi, dan Komunikasi
                  </p>
                </div>
              </div>
              <div className="flex flex-row h-1/4">
                <div className="h-full w-20 bg-black rounded-lg"></div>
                <div className="pl-4">
                  <Link href="/" className="text-lg font-bold">
                    Prosedur Kunjugan ke LayananPustaka Digital{" "}
                  </Link>
                  <p className="text-black text-sm">
                    SIlahkan unduh materi sosialisasi pada tautan berikut
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gray-400 shadow-lg shadow-gray-600 h-96 w-1/2 rounded-xl"></div>
          </div>
          {/* Pengumuman */}
        </div>
      </div>

      {/* Kontainer 4 (Koleksi Terbaru) */}
      <div className="relative w-full">
        <div className="bg-[#1a409a] flex flex-col justify-center items-center px-40 py-10">
          <h1 className="text-white text-center font-bold text-6xl mb-6">
            {" "}
            Koleksi Digital <span className="text-[#ff9600]">UNP</span>
          </h1>
          <div className="bg-[#ff9600] h-1 w-2/3 mb-7"></div>
        </div>
        <div className="bg-[#1a409a] flex flex-row justify-between items-center px-40 py-10">
          <div className="flex flex-col">
            <h1 className="text-white text-center text-6xl mb-6">
              Buku Terbaru
            </h1>
          </div>
          <div className="bg-white h-full rounded-lg w-3/5 flex flex-row overflow-x-auto p-auto">
            {Books.map((item, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 cursor-pointer w-40 h-60 text-orange-300 bg-black m-4 rounded-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-gray-400 hover:transition-all hover:duration-500"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover p-1 rounded-t-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kontainer 5 (Statistik) */}
      <div className="relative w-full h-fit">
        <div className="absolute flex inset-0 z-10 justify-center h-83 bg-[#1a409a] opacity-80 ">
          <h1 className="text-white pt-10 text-5xl font-bold transition-all duration-300 ease-in">
            Statistik Pengunjung
          </h1>
        </div>
        <img
          className="w-full h-83"
          src="/image_3.png"
          alt="Background Image"
        ></img>
        <div className="h-full absolute inset-0 flex flex-row space-x-10 items-center justify-center text-white z-20 py-60 px-40">
          <div className="flex cursor-pointer flex-col justify-center items-center w-1/3 h-full border-2 transition-all duration-500 hover:bg-black hover:transition-all hover:duration-500 hover:-translate-y-5 hover:bg-opacity-20 border-[#ff9600] shadow-inner">
            <h1 className="font-bold text-5xl mb-4"><Number n={1456670} x={10}/></h1>
            <h1 className="text-xl"> Total pengunjung </h1>
          </div>
          <div className="flex cursor-pointer flex-col justify-center items-center w-1/3 h-full border-2 transition-all duration-500 hover:bg-black hover:transition-all hover:duration-500 hover:-translate-y-5 hover:bg-opacity-20 border-[#ff9600] shadow-inner">
            <h1 className="font-bold top-0 text-5xl mb-4"><Number n={134} x={30}/></h1>
            <h1 className="text-xl"> Pengunjung perhari </h1>
          </div>
          <div className="flex cursor-pointer flex-col justify-center items-center w-1/3 h-full border-2 transition-all duration-500 hover:bg-black hover:transition-all hover:duration-500 hover:-translate-y-5 hover:bg-opacity-20 border-[#ff9600] shadow-inner">
            <h1 className="font-bold top-0 text-5xl mb-4"><Number n={230.965} x={20}/></h1>
            <h1 className="text-xl"> Total buku </h1></div>
        </div>
      </div>

      {/* Kontainer 6 (E-journal) */}
      <div className="relative w-full">
        <div className="bg-white flex flex-col justify-center items-center px-40 py-10">
          <h1 className="text-[#ff9600] text-center text-7xl mb-6">
            Mitra Perpustakaan
          </h1>
          <div className="bg-[#1a409a] h-1 w-96 mb-20"></div>
          <div className="flex flex-row overflow-x-auto p-7">
            {mitra.map((item, index) => (
              <div
                key={index}
                className=" flex-shrink-0 w-1/4 h-40 text-orange-300 bg-white m-4 rounded-lg transition-all duration-500 hover:shadow-lg hover:transition-all hover:duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full p-2 rounded-t-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kontainer 7 Footer */}
      <div className="relative w-full">
        <div className="bg-[#ff9600] h-1/2 w-full flex text-white md:flex-row flex-col justify-around items-start py-5 px-20">
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-3xl pb-4">
                Waktu Pelayanan
              </p>
              <li className="text-gray-300 text-sm pb-2 font-semibold   cursor-pointer">
                Senin - Kamis
                <br />text-gray-300 
                07.00 - 16.00 WIB
              </li>
              <li className="text-gray-300 text-sm pb-2 font-semibold   cursor-pointer">
                Jumat <br />
                07.00 - 16.30 WIB
              </li>
              <li className="text-gray-300 text-sm pb-2 font-semibold   cursor-pointer">
                Sabtu <br />
                08.00 - 13.00 WIB
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-3xl pb-4">Fakultas</p>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Ilmu Pendidikan
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Bahasa dan Seni
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Matematika dan IPA
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Ilmu Sosial
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">Teknik</li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Ilmu Keolahragaan
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Ekonomi
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Pariwisata dan Perhotelan
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Pascasarjana
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Psikologi dan Kesehatan
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-3xl pb-4">Lembaga</p>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">LP2M</li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">LP3M</li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">BAK</li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">BUK</li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                BPAKHM
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT BAHASA
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT Pelayanan dan BK
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT Perpustakaan
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT PKK
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT PTIK
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                Bagian Kepegawaian
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">BPMI</li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                International Office
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                Center for Indo-Pasific Studies
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UNP Press
              </li>
              <li className="text-gray-300 text-sm   font-semibold cursor-pointer">
                UPT Layanan Psikologi
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-3xl pb-4">
                Mahasiswa
              </p>
              <li className="text-gray-300 text-sm font-semibold">
                Seleksi Penerimaan
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                Pra Registrasi Mahasiswa Baru
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                E-Jurnal
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                E-Learning
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                Evaluasi Pembelajaran
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                Pendaftaran Wisuda
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                Sistem Informasi Alumni
              </li>
              <li className="text-gray-300 text-sm font-semibold">
                Tracer Studi
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-3xl pb-4">
                Smart Campus
              </p>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                Digital Library
              </li>
              <li className="text-gray-300 text-sm font-semibold cursor-pointer">
                E-Jurnal
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                E-Learning
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Massive Open Online Course (MOOC)
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Portal Akademik
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Sistem Informasi Akademik
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Webmail
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                E-Majalah
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Lecturer Blog
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Sistem Informasi Aset
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Sistem Informasi Kepegawaian
              </li>
              <li className="text-gray-300 text-sm font-semibold   cursor-pointer">
                Pejabat Pengelola Informasi dan Dokumentasi (PPID)
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between py-5 px-10 bg-[#3153A4]">
          <h1 className="text-white font-regular">
            &copy;Perpustakaan Universitas Negeri Padang - 2023
          </h1>
          <div className="flex gap-5">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl cursor-pointer  " />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
    </div> //end
  );
};

export default Home;
