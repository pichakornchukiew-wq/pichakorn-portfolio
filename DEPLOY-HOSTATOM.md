# การนำโปรเจกต์นี้ไปใช้งานบน HostAtom

HostAtom รองรับ Node.js ผ่าน **Plesk** (เมนู "Node.js" ในหน้าจัดการโดเมน) ดังนั้นมี 2 ทางเลือกหลัก ขึ้นอยู่กับแพ็กเกจโฮสติ้งที่ใช้:

- **แพ็กเกจที่รองรับ Node.js (Plesk)** → deploy เป็นแอป Next.js แบบเต็มรูปแบบ (SSR/SSG ครบ)
- **แพ็กเกจ shared hosting ธรรมดา (ไม่มี Node.js runtime)** → export เป็นไฟล์ static แล้วอัปโหลดเหมือนเว็บ HTML ทั่วไป

---

## ทางเลือกที่ 1: แพ็กเกจรองรับ Node.js (Plesk) — แนะนำ

### 1. เตรียมไฟล์
อัปโหลดทั้งโปรเจกต์ขึ้นเซิร์ฟเวอร์ (ผ่าน File Manager, FTP, หรือ Git extension ของ Plesk) โดย **ไม่ต้องอัปโหลด** `node_modules/` และ `.next/` (จะสร้างบนเซิร์ฟเวอร์ทีหลัง)

โปรเจกต์นี้มีไฟล์ `server.js` ที่จำเป็นสำหรับ Plesk อยู่แล้ว (Plesk ใช้ Phusion Passenger ซึ่งต้องมีไฟล์ .js เป็นจุดเริ่มต้น ไม่ได้รัน `npm start` แบบ Vercel)

### 2. เปิดใช้งาน Node.js ใน Plesk
1. เข้า Plesk → เลือกโดเมน → คลิก **Node.js**
2. ถ้ายังไม่มีตัวเลือกนี้ ให้ไปที่ Tools & Settings → Updates and Upgrades → Add/Remove Components → ติดตั้ง "NodeJS support" (หรือแจ้งซัพพอร์ต HostAtom ให้เปิดให้)
3. ตั้งค่า:
   - **Node.js version**: 18.x ขึ้นไป
   - **Document Root**: `httpdocs` (ค่าเริ่มต้น)
   - **Application Root**: `httpdocs` (path ที่อัปโหลดโปรเจกต์)
   - **Application Startup File**: `server.js`

### 3. ติดตั้ง dependencies และ build
ในหน้า Node.js ของ Plesk:
1. กด **NPM install** (หรือใช้ SSH: `npm install`)
2. กด **Run script** → พิมพ์ `build` (หรือ SSH: `npm run build`) เพื่อสร้างโฟลเดอร์ `.next`

### 4. Start แอป
กด **Restart App** (หรือ Start App) ใน Plesk แล้วเข้าโดเมนของคุณเพื่อทดสอบ

### 5. SSL
เปิด Let's Encrypt ฟรีผ่าน Plesk (เมนู SSL/TLS Certificates) ตามปกติ

> หมายเหตุ: ถ้าเจอปัญหาแอปรันเป็น dev mode หรือ error ตอน start ให้ตรวจสอบว่า `NODE_ENV=production` ถูกตั้งไว้ (ไฟล์ `server.js` ที่แถมมาตั้งค่านี้ให้อัตโนมัติแล้ว) และลอง Restart App อีกครั้งหลัง build เสร็จ

---

## ทางเลือกที่ 2: Shared hosting ธรรมดา (ไม่มี Node.js) — Static Export

ใช้ได้เพราะโปรเจกต์นี้ไม่มี API routes หรือ Server Actions ทุกหน้าจึงสามารถ export เป็น static HTML ได้ครบ (รวมถึง `/work/[id]` ที่ใช้ `generateStaticParams` อยู่แล้ว)

### ขั้นตอน (ทำบนเครื่องของคุณเอง ก่อนอัปโหลด)

1. แก้ `next.config.js` เพิ่ม:

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: "export",
     images: {
       unoptimized: true, // static export ไม่รองรับ next/image optimization API
       remotePatterns: [
         { protocol: "https", hostname: "picsum.photos" },
       ],
     },
   };

   module.exports = nextConfig;
   ```

2. รัน:
   ```bash
   npm install
   npm run build
   ```
   จะได้โฟลเดอร์ **`out/`** ซึ่งเป็นไฟล์ static ล้วน (HTML/CSS/JS)

3. อัปโหลดเนื้อหาทั้งหมด **ภายใน** `out/` (ไม่ใช่ตัวโฟลเดอร์ out เอง) ไปที่ `httpdocs/` หรือ `public_html/` บน HostAtom ผ่าน File Manager หรือ FTP

4. ไม่ต้องตั้งค่า Node.js ใดๆ — เข้าโดเมนได้ทันทีเหมือนเว็บ static ทั่วไป

**ข้อจำกัดของทางเลือกนี้**: ปุ่ม "Download CV (PDF)" และฟอร์ม Contact ยังทำงานได้ (เป็น client-side อยู่แล้ว) แต่ future ถ้าจะเพิ่ม API route หรือ server action จะใช้ไม่ได้ในโหมด static export — ต้องกลับไปใช้ทางเลือกที่ 1

---

## แนะนำ

ถ้า HostAtom แพ็กเกจของคุณรองรับ Node.js (ส่วนใหญ่แพ็กเกจ Cloud/Private Hosting ของ HostAtom รองรับ) ให้ใช้ **ทางเลือกที่ 1** จะได้ฟีเจอร์ครบและอัปเดตง่ายกว่าในระยะยาว
