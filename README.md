# 👓 Meta Glass EXIF Injector

A lightweight, modern, 100% client-side web application to inject authentic **Ray-Ban Meta Smart Glasses** EXIF metadata into your photos (JPG, PNG, HEIC) directly in the browser without uploading any files to a server.

---

## ✨ Features

- 🔒 **100% Client-Side & Private:** All binary processing, HEIC conversions, and EXIF injections happen in your browser memory. No server uploads.
- 👓 **Authentic Meta Glass EXIF:** Injects full camera metadata markers (`Make: Meta AI`, `Model: Ray-Ban Meta Smart Glasses 2`, `Software: Meta View App`, Exif 2.32, exposure settings, ISO, focal length, etc.).
- 🖼️ **Multi-Format Support:**
  - **JPEG / JPG:** Fast raw APP1 binary segment injection.
  - **PNG:** Auto-converted to high-quality JPEG.
  - **HEIC / HEIF:** Decoded and converted to JPEG on-the-fly directly in-browser.
- 🕒 **Dynamic Timestamp:** Auto-sets to current time or lets you pick a custom capture date & time.
- 🛠️ **Customizable:** Option to customize Make & Model parameters.
- ⚡ **Zero Setup Required:** Pure HTML, Tailwind CSS, and Vanilla JavaScript.

---

## 🚀 Getting Started

Simply clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/fikimaul/meta-glasses-converter.git
cd meta-glasses-converter
# Open index.html directly in your browser
```

Or deploy instantly to **GitHub Pages**, **Vercel**, or **Cloudflare Pages** by linking the repository.

---

## 📋 Injected EXIF Metadata Specification

| Tag Name | EXIF Key | Value |
| :--- | :--- | :--- |
| **Make** | `0x010F` | `Meta AI` |
| **Model** | `0x0110` | `Ray-Ban Meta Smart Glasses 2` |
| **Software** | `0x0131` | `Meta View App` |
| **ExifVersion** | `0x9000` | `0232` (Exif 2.32) |
| **ExposureTime** | `0x829A` | `1/120s` |
| **FNumber** | `0x829D` | `f/2.2` |
| **ISO** | `0x8827` | `100` |
| **FocalLength** | `0x920A` | `2.8 mm` (`24 mm` in 35mm equivalent) |
| **ColorSpace** | `0xA001` | `sRGB` |
| **DateTimeOriginal** | `0x9003` | User-selected / Current timestamp |

---

## 📄 License

MIT License
