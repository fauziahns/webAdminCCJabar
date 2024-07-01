import { NavLink } from "react-router-dom"
import SideNav from "../../components/SideNav.jsx/SideNav"


function LaporanKerusakanFasilitas() {

  return (
    <>
    <div className="flex bg-white h-screen text-black">
      <SideNav/>

      <div className="flex flex-col w-screen overflow-x-auto">
            <div className=" mx-10 mt-10 text-black mb-10">
                        <p className='text-black font-semibold text-lg'>Laporan Akhir Acara Bogor Creative Center</p>
                            <p className='my-4 text-sm font-semibold'>Cetak Laporan</p>
                            <div className="flex text-sm items-center mt-4">
                                <div className="flex items-center w-56" >
                                    <p>Dari</p>
                                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-300" />
                                </div>
                                <div className="flex items-center w-56 mx-4" >
                                    <p>Hingga</p>
                                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-300" />
                                </div>
                                <div className="btn">Cetak</div>
                            </div>
            </div>

        <div className="">
          <div className=" bg-white mx-10 p-5 rounded-lg text-black border ">
            <div className="flex items-center mb-10 justify-between">
                <p className='text-lg font-semibold '>Laporan Kerusakan Fasilitas</p>
                <NavLink to='/tambahLaporan'>
                    <div className="btn bg-blue-500 border-none text-white hover:bg-blue-200 hover:text-black">Tambah Laporan</div>
                </NavLink>
            </div>
          <table className="table w-[100%]">
              {/* head */}
              <thead className='bg-slate-200 rounded-lg'>
              <tr className='text-black text-center'>
                  <th>No Laporan</th>
                  <th>Pemohon</th>
                  <th>Lokasi Gedung</th>
                  <th>Ruangan</th>
                  <th>Tanggal</th>
                  <th>Denda</th>
                  <th>Bukti Kerusakan</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
                  {/* row 1 */}
                  <tr className='text-center'>
                      <td>0001</td>
                      <td>Fauziah Nur Syifa</td>
                      <td>Bogor Creative Center</td>
                      <td>Cafe Indoor</td>
                      <td>12/12/2024</td>
                      <td>300.000</td>
                      <td className="underline">Lihat Bukti</td>
                      <td>
                        <p className='py-2 font-semibold text-sm bg-green-300 rounded-lg'>Terkirim</p>
                      </td>
                  </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LaporanKerusakanFasilitas
