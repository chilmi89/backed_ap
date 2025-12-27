// app/api/check_db/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Sesuaikan path jika lib/db.ts berada di tempat lain

export async function GET() {
  try {
    // Lakukan query sederhana: SELECT 1
    const [rows] = await pool.execute('SELECT 1 + 1 AS result');
    const result = (rows as any[])[0]?.result;

    if (result === 2) {
      return NextResponse.json(
        { success: true, message: 'Koneksi ke MySQL berhasil!', dbResponse: result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Respons database tidak sesuai.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error koneksi ke database:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal terhubung ke MySQL.', error: (error as Error).message },
      { status: 500 }
    );
  }
}