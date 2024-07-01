import { NavLink } from "react-router-dom"
import SideNav from "../../components/SideNav.jsx/SideNav"


function LandingPage() {

  return (
    <>
    <div className="flex bg-white h-screen text-black">
      <SideNav/>

      <div className="flex flex-col w-screen">
        <div className="flex m-10">

          <NavLink to='/permohonanPCCTimKreasi'>
            <div className="border p-5 rounded-lg h-[150px] hover:bg-slate-50 hover:shadow-md">
              <p className='text-md font-bold'>Purwakarta Creative Center</p>
                  <div className="flex flex-col text-center mt-4">
                    <p className='text-4xl font-semibold'>10</p>
                    <p className='mt-2 text-sm'>Permohonan Baru</p>
                  </div>
            </div>
          </NavLink>

          <NavLink to='/permohonanTimKreasi'>
            <div className="border p-5 rounded-lg h-[150px] mx-4 hover:bg-slate-50 hover:shadow-md">
              <p className='text-md font-bold'>Bogor Creatice Center</p>
                  <div className="flex flex-col text-center mt-4">
                    <p className='text-4xl font-semibold'>50</p>
                    <p className='mt-2 text-sm'>Permohonan Baru</p>
                  </div>
            </div>
          </NavLink>

          <NavLink to='/permohonanADTimKreasi'>
            <div className="border p-5 rounded-lg h-[150px] hover:bg-slate-50 hover:shadow-md">
              <p className='text-md font-bold'>Ruang Kreatif Ahmad Djuhara</p>
                  <div className="flex flex-col text-center mt-4">
                    <p className='text-4xl font-semibold'>50</p>
                    <p className='mt-2 text-sm'>Permohonan Baru</p>
                  </div>
            </div>
          </NavLink>

        </div>
        <div className="">
          <div className="overflow-x-auto bg-white mx-10 p-5 rounded-lg text-black border ">
            <p className='text-lg font-semibold mb-10'>Laporan Kerusakan Fasilitas</p>
          <table className="table w-[100%]">
              {/* head */}
              <thead className='bg-slate-200 rounded-lg'>
              <tr className='text-black text-center'>
                  <th>No Laporan</th>
                  <th>Pemohon</th>
                  <th>Nama Ruangan</th>
                  <th>Denda</th>
                  <th>Status</th>
                  <th>Bukti Bayar</th>
                  <th>Aksi</th>
              </tr>
              </thead>
              <tbody>
                  {/* row 1 */}
                  <tr className='text-center'>
                      <td>0001</td>
                      <td>Fauziah Nur Syifa</td>
                      <td>Cafe Outdoor</td>
                      <td>300.000</td>
                      <td>
                        <p className='py-2 font-semibold text-sm bg-red-300 rounded-lg'>Belum Bayar</p>
                      </td>
                      <td></td>
                  </tr>

                  {/* row 1 */}
                  <tr className='text-center'>
                      <td>0001</td>
                      <td>Fauziah Nur Syifa</td>
                      <td>Cafe Outdoor</td>
                      <td>300.000</td>
                      <td>
                        <p className='py-2 font-semibold text-sm bg-green-300 rounded-lg'>Sudah Bayar</p>
                      </td>
                      <td className="uderline cursor-pointer">Lihat Bukti</td>
                      <td>
                        <div className="flex">
                          <img src="src\assets\checklist.png" alt="" className="mr-2"/>
                          <img src="src\assets\remove.png" alt="" />
                        </div>
                      </td>
                  </tr>

                  {/* row 1 */}
                  <tr className='text-center'>
                      <td>0001</td>
                      <td>Fauziah Nur Syifa</td>
                      <td>Cafe Outdoor</td>
                      <td>300.000</td>
                      <td>
                        <p className='py-2 font-semibold text-sm bg-green-500 rounded-lg'>Terkonfirmasi</p>
                      </td>
                      <td className="uderline cursor-pointer">Lihat Bukti</td>
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

export default LandingPage
