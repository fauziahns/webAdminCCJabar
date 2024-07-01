import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TambahLaporan() {
  return (
    <div className="bg-white">
        <div className=" mx-auto items-center justify-center flex ">
            <div className="rounded-lg border mt-10 p-10 text-black">
                <p className='mb-2'>Nama Pemohon</p>
                <input  
                    type="text" 
                    placeholder="Type here" 
                    name='namaPemohon'
                    className="input input-bordered w-full max-w-xs bg-white" />

                <p className='mt-4 mb-2'>Lokasi Gedung</p>
                <label className="flex form-control w-full max-w-xs mt-4">
                    <select 
                    className="select select-bordered bg-white placeholder:text-sm text-black"
                    name='lokasiGedung'
                    >
                        <option disabled selected>Pilih</option>
                        <option value="Bogor Creative Center">Bogor Creative Center</option>
                        <option value="Purwakarta Creative Center">Purwakarta Creative Center</option>
                        <option value="Ruang Kreatif Ahmad Djuhara">Ruang Kreatif Ahmad Djuhara</option>
                    </select>
                </label>

                <p className='mt-4 mb-2'>Nama Ruangan</p>
                <div className="flex">
                    <div className="form-control text-black">
                        <label className="label items-start flex flex-col">
                        <p className='text-sm font-bold'>Bogor Creative Center</p>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Cafe Outdoor</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Cafe Indoor</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Ruang Galeri</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Ruang Fotografi</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black ">Ruang Musik</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Auditorium</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                        </label>
                    </div>

                    <div className="form-control text-black ml-10">
                        <label className="label items-start flex flex-col">
                        <p className='text-sm font-bold'>Purwakarta Creative Center</p>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Ruang Flexible</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Workshop</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Auditorium</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Ruang Kelas</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black ">Ruang Audio</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                        </label>
                    </div>

                    <div className="form-control text-black ml-10">
                        <label className="label items-start flex flex-col">
                        <p className='text-sm font-bold'>Ruang Kreatif Ahmad Djuhara</p>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Gor</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Workshop</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Plaza Terbuka</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Co-working Space</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black ">Auditorium</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                            <div className="flex mt-3 gap-4 justify-between w-36">
                            <span className="label-text text-black">Kantin</span>
                            <input type="checkbox" className="checkbox border-black" />
                            </div>
                        </label>
                    </div>
                </div>

                <p className='mt-4 mb-2'>Tanggal</p>
                <input  
                    type="date" 
                    placeholder="Type here" 
                    name='tanggal'
                    className="input input-bordered w-full max-w-xs bg-white" />

                <p className='mt-4 mb-2'>Denda</p>
                <input  
                    type="number" 
                    placeholder="Type here" 
                    name='dendaKerusakan'
                    className="input input-bordered w-full max-w-xs bg-white" />

                <div className="w-full max-w-xs mt-4 text-black ">
                    <p className='text-sm mb-2'>Bukti Kerusakan</p>
                    <input 
                        type="file" 
                        className="file-input file-input-bordered file-input-md  w-full max-w-xs bg-white" 
                        name='buktiKerusakan'/>
                </div>

                <NavLink to='/laporanKerusakanFasilitas'>
                    <div className="btn mt-4 bg-green-500 hover:bg-white text-black">Submit</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
