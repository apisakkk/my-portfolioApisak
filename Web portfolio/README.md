# 🌐 Modern Portfolio Website

โครงสร้างเว็บไซต์ Portfolio แบบแยกหน้า (Multi-page) สไตล์โมเดิร์น ดีไซน์มินิมอลผสาน Dark Mode Glassmorphism พร้อม Header, Menu Bar และ Footer ที่ใช้ร่วมกันทุกหน้าอย่างสมบูรณ์แบบ

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
portfolio-website/
├── css/
│   └── style.css            # ไฟล์ CSS หลัก รวมระบบดีไซน์ Responsive & Animation
├── js/
│   └── main.js              # ไฟล์ JavaScript จัดการเมนูมือถือ, Filter, ฟอร์ม และ Active Tab
├── index.html               # 🏠 หน้าแรก (Home)
├── education.html           # 🎓 หน้าประวัติการศึกษา (Education)
├── portfolio.html           # 💼 หน้าผลงานและโปรเจกต์ (Portfolio)
├── activity.html            # 🏆 หน้ากิจกรรมและประสบการณ์ (Activity)
├── contact.html             # ✉️ หน้าช่องทางติดต่อ (Contact)
└── README.md                # คู่มือการใช้งานและโครงสร้างโปรเจกต์
```

---

## 🌟 จุดเด่นและการออกแบบ

1. **Header & Menu Bar (ร่วมกันทุกหน้า)**:
   - โลโก้แบรนด์สไตล์โมเดิร์นพร้อมไอคอน Gradient Badge
   - เมนูหลัก 5 หน้าตามข้อกำหนด: `Home`, `Education`, `Portfolio`, `Activity`, `Contact`
   - ไฮไลท์หน้าปัจจุบันอัตโนมัติ (Active State)
   - แถบเมนูด้านบนโปร่งแสงแบบกระจกแก้ว (Glassmorphism & Sticky Blur)
   - เมนูย่อสำหรับหน้าจอมือถือ (Responsive Hamburger Navigation)

2. **Footer (ร่วมกันทุกหน้า)**:
   - สรุปข้อมูลแบรนด์และสถานะความพร้อมรับงาน (Available for hire pulse badge)
   - เมนูนำทางแบบย่อ (Quick links)
   - ข้อมูลติดต่อด่วน (Email, Phone, Address)
   - **ลิงก์โซเชียลมีเดียพร้อมไอคอนและเอฟเฟกต์ Glow / Hover**: GitHub, LinkedIn, Facebook, Instagram, YouTube
   - **ลิขสิทธิ์ (Copyright)**: แสดงข้อความสงวนลิขสิทธิ์ครบถ้วน พร้อมปุ่มเลื่อนกลับขึ้นด้านบน (Back to Top)

3. **แต่ละหน้าออกแบบเฉพาะด้าน**:
   - `index.html`: Hero Section แนะนำตัว, สถิติ, ปุ่ม CTA, และไฮไลท์ภาพรวม
   - `education.html`: ไทม์ไลน์การศึกษาแบบเส้นทางเวลา (Timeline), เกรด, วุฒิการศึกษา, เกียรตินิยม และประกาศนียบัตร (Certifications)
   - `portfolio.html`: แถบกรองหมวดหมู่ผลงานแบบ Interactive (Web, Mobile, Design) พร้อมการ์ดแสดงเทคโนโลยีและลิงก์เดโม/GitHub
   - `activity.html`: การ์ดแสดงกิจกรรม Hackathon, กิจกรรมจิตอาสา, วิทยากร, และผลสำเร็จ
   - `contact.html`: ข้อมูลการติดต่อโดยตรง พร้อมฟอร์มส่งข้อความ (Interactive Contact Form)

---

## 🚀 วิธีเปิดใช้งาน

1. สามารถเปิดดูได้ทันทีโดยดับเบิลคลิกเปิดไฟล์ `index.html` บนเบราว์เซอร์ (Chrome, Edge, Firefox, Safari)
2. หรือใช้ Live Server / HTTP Server (เช่น ใน VS Code หรือ Python: `python -m http.server 8000`)

