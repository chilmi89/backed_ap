// // src/scripts/seed.ts
// import mysql from 'mysql2/promise';
// import * as bcrypt from 'bcryptjs';
// import 'dotenv/config';

// async function seedAdmin() {
//   let connection;

//   try {
//     // 🔑 await di sini!
//     connection = await mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD || '',
//       database: process.env.DB_NAME,
//       port: parseInt(process.env.DB_PORT || '3306', 10),
//     });

//     const email = 'adminagro@gmail.com';
//     const name = 'Admin Agro';
//     const password = 'admin123';

//     // Cek apakah admin sudah ada
//     const [rows] = await connection.execute('SELECT id FROM users WHERE email = ?', [email]);
//     if ((rows as any[]).length > 0) {
//       console.log('✅ Admin sudah ada. Lewati.');
//       return;
//     }

//     // Hash password & insert
//     const hashed = await bcrypt.hash(password, 12);
//     await connection.execute(
//       'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
//       [name, email, hashed, 'admin']
//     );

//     console.log('✅ Admin berhasil dibuat!');
//   } catch (err) {
//     console.error('❌ Gagal membuat admin:', err);
//   } finally {
//     // Tutup koneksi jika terbuka
//     if (connection) {
//       await connection.end(); // 🔑 await di sini juga!
//     }
//   }
// }

// // Jalankan langsung
// seedAdmin();