// Meta Glass EXIF Segment Template
const META_GLASS_APP1_BASE64 = "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";

// DOM Elements
const fileInput = document.getElementById('fileInput');
const dropzone = document.getElementById('dropzone');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const previewImg = document.getElementById('previewImg');
const previewPlaceholder = document.getElementById('previewPlaceholder');
const btnConvert = document.getElementById('btnConvert');
const resultActions = document.getElementById('resultActions');
const btnShareStory = document.getElementById('btnShareStory');
const btnDownload = document.getElementById('btnDownload');
const inputDateTime = document.getElementById('inputDateTime');
const btnNow = document.getElementById('btnNow');
const customModelBox = document.getElementById('customModelBox');
const inputMake = document.getElementById('inputMake');
const inputModel = document.getElementById('inputModel');
const tagMake = document.getElementById('tagMake');
const tagModel = document.getElementById('tagModel');
const tagDateTime = document.getElementById('tagDateTime');
const statusNotice = document.getElementById('statusNotice');

// Shortcut Modal Elements
const btnShortcutModal = document.getElementById('btnShortcutModal');
const shortcutModal = document.getElementById('shortcutModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const copyUrlInput = document.getElementById('copyUrlInput');
const btnCopyUrl = document.getElementById('btnCopyUrl');

if (btnShortcutModal && shortcutModal && btnCloseModal) {
  btnShortcutModal.addEventListener('click', () => {
    shortcutModal.classList.remove('hidden');
    shortcutModal.classList.add('flex');
    if (copyUrlInput && window.location.href.startsWith('http')) {
      copyUrlInput.value = window.location.href;
    }
  });

  if (btnCopyUrl && copyUrlInput) {
    btnCopyUrl.addEventListener('click', () => {
      copyUrlInput.select();
      navigator.clipboard.writeText(copyUrlInput.value).then(() => {
        btnCopyUrl.textContent = 'Tersalin! ✔';
        setTimeout(() => {
          btnCopyUrl.textContent = 'Salin URL';
        }, 2000);
      });
    });
  }

  btnCloseModal.addEventListener('click', () => {
    shortcutModal.classList.add('hidden');
    shortcutModal.classList.remove('flex');
  });

  shortcutModal.addEventListener('click', (e) => {
    if (e.target === shortcutModal) {
      shortcutModal.classList.add('hidden');
      shortcutModal.classList.remove('flex');
    }
  });
}

let currentFile = null;
let currentArrayBuffer = null;
let convertedBlob = null;
let convertedFileName = '';

// Initialize default date & time (now)
function setDateTimeNow() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  inputDateTime.value = now.toISOString().slice(0, 16);
  updateExifPreview();
}

setDateTimeNow();
btnNow.addEventListener('click', setDateTimeNow);
inputDateTime.addEventListener('input', updateExifPreview);

// Handle Preset Selection
document.querySelectorAll('input[name="metaPreset"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
      customModelBox.classList.remove('hidden');
      customModelBox.classList.add('grid');
    } else {
      customModelBox.classList.add('hidden');
      customModelBox.classList.remove('grid');
      inputMake.value = 'Meta AI';
      inputModel.value = 'Ray-Ban Meta Smart Glasses 2';
    }
    updateExifPreview();
  });
});

inputMake.addEventListener('input', updateExifPreview);
inputModel.addEventListener('input', updateExifPreview);

function updateExifPreview() {
  const isCustom = document.querySelector('input[name="metaPreset"]:checked').value === 'custom';
  tagMake.textContent = isCustom ? (inputMake.value || 'Meta AI') : 'Meta AI';
  tagModel.textContent = isCustom ? (inputModel.value || 'Ray-Ban Meta Smart Glasses 2') : 'Ray-Ban Meta Smart Glasses 2';
  
  if (inputDateTime.value) {
    const d = new Date(inputDateTime.value);
    tagDateTime.textContent = formatExifDate(d);
  } else {
    tagDateTime.textContent = '-';
  }
}

function formatExifDate(d) {
  const pad = (n) => String(n).padStart(2, '0');
  const YYYY = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const DD = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${YYYY}:${MM}:${DD} ${hh}:${mm}:${ss}`;
}

// File drop & select handling
dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('border-cyan-400', 'bg-cyan-500/10');
});

['dragleave', 'dragend'].forEach(type => {
  dropzone.addEventListener(type, () => {
    dropzone.classList.remove('border-cyan-400', 'bg-cyan-500/10');
  });
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('border-cyan-400', 'bg-cyan-500/10');
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    handleFile(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    handleFile(e.target.files[0]);
  }
});

async function handleFile(file) {
  const isHeic = file.type.match(/^image\/(heic|heif)$/i) || file.name.match(/\.(heic|heif)$/i);
  const isPng = file.type === 'image/png' || file.name.toLowerCase().endsWith('.png');
  const isJpeg = file.type.match(/^image\/(jpeg|jpg)$/i) || file.name.match(/\.(jpe?g)$/i);

  if (!isJpeg && !isPng && !isHeic) {
    alert('Harap pilih file gambar JPEG, PNG, atau HEIC.');
    return;
  }

  currentFile = file;
  fileName.textContent = file.name;
  fileSize.textContent = (file.size / 1024).toFixed(1) + ' KB';
  fileInfo.classList.remove('hidden');

  if (isHeic) {
    statusNotice.innerHTML = '<span class="text-cyan-400 font-medium animate-pulse">⏳ Mengonversi file HEIC ke JPEG di browser...</span>';
    btnInject.disabled = true;
    try {
      let heicBlob = file;
      if (typeof heic2any !== 'undefined') {
        const convertedBlob = await heic2any({
          blob: heicBlob,
          toType: 'image/jpeg',
          quality: 0.95
        });
        const finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        currentArrayBuffer = await finalBlob.arrayBuffer();
        const objectUrl = URL.createObjectURL(finalBlob);
        previewImg.src = objectUrl;
        previewImg.classList.remove('hidden');
        previewPlaceholder.classList.add('hidden');
        statusNotice.innerHTML = '<span class="text-emerald-400 font-semibold">✔ File HEIC berhasil dikonversi & siap diinjeksi EXIF.</span>';
      } else {
        throw new Error('Library konversi HEIC belum siap.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal memproses file HEIC: ' + (err.message || err));
      statusNotice.innerHTML = '<span class="text-rose-400 font-semibold">Gagal memproses file HEIC.</span>';
      return;
    }
  } else {
    // Preview langsung untuk format browser native
    const objectUrl = URL.createObjectURL(file);
    previewImg.src = objectUrl;
    previewImg.classList.remove('hidden');
    previewPlaceholder.classList.add('hidden');

    // Load array buffer
    if (isPng) {
      statusNotice.innerHTML = '<span class="text-yellow-400">Mengonversi PNG ke JPEG untuk injeksi EXIF...</span>';
      currentArrayBuffer = await convertPngToJpegBuffer(file);
      statusNotice.innerHTML = '<span>Gambar berhasil dikonversi ke JPEG & siap diinjeksi EXIF.</span>';
    } else {
      currentArrayBuffer = await file.arrayBuffer();
      statusNotice.innerHTML = '<span>File siap diinjeksi EXIF.</span>';
    }
  }

  // Reset result state
  convertedBlob = null;
  resultActions.classList.add('hidden');
  resultActions.classList.remove('grid');
  btnConvert.disabled = false;
}

function convertPngToJpegBuffer(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      // Draw white background in case of PNG transparency
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        blob.arrayBuffer().then(resolve).catch(reject);
      }, 'image/jpeg', 0.95);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// Binary Utilities
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Replace ASCII string inside byte array without overflowing length
 */
function patchAscii(uint8Arr, oldStr, newStr) {
  const oldBytes = [];
  for (let i = 0; i < oldStr.length; i++) oldBytes.push(oldStr.charCodeAt(i));
  
  for (let i = 0; i <= uint8Arr.length - oldBytes.length; i++) {
    let match = true;
    for (let j = 0; j < oldBytes.length; j++) {
      if (uint8Arr[i + j] !== oldBytes[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      // Pad or truncate new string to exact original length
      for (let j = 0; j < oldBytes.length; j++) {
        if (j < newStr.length) {
          uint8Arr[i + j] = newStr.charCodeAt(j);
        } else {
          uint8Arr[i + j] = 0; // null pad
        }
      }
    }
  }
}

/**
 * Injeksi segmen APP1 EXIF ke dalam JPEG byte array
 */
function injectExifSegment(jpegBuffer, exifSegmentBytes) {
  const view = new Uint8Array(jpegBuffer);
  
  // Validasi Header JPEG (0xFFD8)
  if (view[0] !== 0xFF || view[1] !== 0xD8) {
    throw new Error('Bukan file JPEG yang valid (header FF D8 tidak ditemukan).');
  }

  // Parse segmen JPEG dan hilangkan segmen Exif APP1 lama jika ada
  const segments = [];
  let offset = 2;
  
  while (offset < view.length) {
    if (view[offset] !== 0xFF) {
      // Menemukan raw payload image stream
      segments.push(view.slice(offset));
      break;
    }

    const marker = view[offset + 1];
    
    // SOS (Start of Scan 0xDA) atau EOI (0xD9) menandakan awal kompresi data gambar
    if (marker === 0xDA || marker === 0xD9) {
      segments.push(view.slice(offset));
      break;
    }

    const segLen = (view[offset + 2] << 8) | view[offset + 3];
    const segTotalLen = 2 + segLen;
    const currentSegment = view.slice(offset, offset + segTotalLen);

    // Cek apakah segmen ini adalah APP1 Exif yang ada
    let isOldExif = false;
    if (marker === 0xE1 && segLen > 6) {
      const sig = String.fromCharCode(view[offset + 4], view[offset + 5], view[offset + 6], view[offset + 7]);
      if (sig === 'Exif') {
        isOldExif = true;
      }
    }

    // Hanya simpan segmen jika bukan segmen EXIF lama
    if (!isOldExif) {
      segments.push(currentSegment);
    }

    offset += segTotalLen;
  }

  // Rekonstruksi JPEG baru:
  // [SOI (0xFF 0xD8)] + [Exif APP1 Segmen Baru] + [Semua segmen & payload lainnya]
  const totalLength = 2 + exifSegmentBytes.length + segments.reduce((acc, cur) => acc + cur.length, 0);
  const result = new Uint8Array(totalLength);
  
  // 1. Tulis SOI
  result[0] = 0xFF;
  result[1] = 0xD8;
  let writeOffset = 2;

  // 2. Sisipkan APP1 Exif Meta Glass
  result.set(exifSegmentBytes, writeOffset);
  writeOffset += exifSegmentBytes.length;

  // 3. Sisipkan segmen-segmen sisa
  for (const seg of segments) {
    result.set(seg, writeOffset);
    writeOffset += seg.length;
  }

  return result;
}

// Handle Convert EXIF
btnConvert.addEventListener('click', async () => {
  if (!currentArrayBuffer) return;

  try {
    btnConvert.disabled = true;
    btnConvert.innerHTML = '<span class="inline-block animate-spin mr-2">⏳</span> Memproses EXIF Inject...';

    // Clone base Exif bytes
    const exifBytes = base64ToUint8Array(META_GLASS_APP1_BASE64);

    // Modifikasi tanggal jika ada
    if (inputDateTime.value) {
      const selectedDate = new Date(inputDateTime.value);
      const exifDateFormatted = formatExifDate(selectedDate);
      patchAscii(exifBytes, '2026:09:03:15:12:47', exifDateFormatted);
    }

    // Modifikasi Model jika custom
    const isCustom = document.querySelector('input[name="metaPreset"]:checked').value === 'custom';
    if (isCustom && inputModel.value) {
      patchAscii(exifBytes, 'Ray-Ban Meta Smart Glasses 2', inputModel.value);
    }
    if (isCustom && inputMake.value) {
      patchAscii(exifBytes, 'Meta AI', inputMake.value);
    }

    // Injeksi segmen ke dalam file target
    const finalJpegBytes = injectExifSegment(currentArrayBuffer, exifBytes);

    // Siapkan Blob hasil
    convertedBlob = new Blob([finalJpegBytes], { type: 'image/jpeg' });
    
    // Tentukan nama file
    let downloadFileName = currentFile.name;
    if (!downloadFileName.toLowerCase().match(/\.jpe?g$/i)) {
      downloadFileName = downloadFileName.replace(/\.[^/.]+$/, '') + '.jpg';
    }
    convertedFileName = downloadFileName;

    // Tampilkan tombol aksi (Share to Story & Download)
    resultActions.classList.remove('hidden');
    resultActions.classList.add('grid');

    statusNotice.innerHTML = '<span class="text-emerald-400 font-semibold">✔ Foto berhasil dikonversi! Pilih <strong>Share to Story</strong> atau <strong>Download</strong>.</span>';

  } catch (err) {
    console.error(err);
    alert('Gagal menginjeksi EXIF: ' + err.message);
  } finally {
    btnConvert.disabled = false;
    btnConvert.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span>Convert / Inject EXIF Ulang</span>`;
  }
});

// Handle Download Button
btnDownload.addEventListener('click', () => {
  if (!convertedBlob) return;
  const downloadUrl = URL.createObjectURL(convertedBlob);
  const link = document.createElement('a');
  link.download = convertedFileName || 'meta_glasses.jpg';
  link.href = downloadUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
});

// Handle Share to Story (Web Share API for Instagram/WhatsApp/Facebook Story)
btnShareStory.addEventListener('click', async () => {
  if (!convertedBlob) return;

  const fileToShare = new File([convertedBlob], convertedFileName || 'photo.jpg', { type: 'image/jpeg' });

  if (navigator.canShare && navigator.canShare({ files: [fileToShare] })) {
    try {
      await navigator.share({
        files: [fileToShare],
        title: 'Meta Glasses Photo',
        text: 'Taken with Ray-Ban Meta Smart Glasses'
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err);
        alert('Gagal membagikan foto: ' + err.message);
      }
    }
  } else {
    // Fallback jika Web Share API tidak didukung di desktop / browser tertentu
    alert('Web Share API tidak didukung di browser ini. Foto akan otomatis diunduh agar dapat diunggah manual ke Story Instagram / WhatsApp.');
    btnDownload.click();
  }
});
