import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PermohonanDitolak() {
  return (
    <div className="bg-white h-screen">
        <div className="artboard artboard-horizontal phone-1 mx-auto items-center flex">
            <div className="rounded-lg border p-10">
                <p>Alasan Penolakan</p>
                <label className="flex form-control w-full max-w-xs mt-4">
                    <select 
                    className="select select-bordered w-56 bg-white placeholder:text-sm text-black"
                    name='lokasiGedung'
                    >
                        <option disabled selected>Pilih</option>
                        <option value="">Persyaratan Tidak Lengkap</option>
                        <option value="">Acara Tidak Termasuk dalam 17 Subsektor</option>
                        <option value="">Acara Tidak Termasuk dalam Jenis Acara yang Dizinkan</option>
                        <option value="">Data Pemohon Invalid</option>
                        <option value="">Data Intansi Invalid</option>
                        <option value="">Data Acara Invalid</option>
                        <option value="">Jadwal Sudah Terisi</option>
                    </select>
                </label>
                <NavLink to='/permohonan'>
                    <div className="btn mt-4 bg-green-500 hover:bg-white text-black">Submit</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
