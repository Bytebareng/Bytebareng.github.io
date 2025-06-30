function kirimWA(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const usaha = document.getElementById("usaha").value;
  const jenis = document.getElementById("jenis").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const deskripsi = document.getElementById("deskripsi").value;

  const adminWA = "6285881414377"; // Ganti dengan nomor admin ByteBareng
  const teks = `*Formulir Pendaftaran UMKM ByteBareng*%0A
=========================%0A
👤 Nama Lengkap: ${nama}%0A
🏪 Nama Usaha: ${usaha}%0A
📦 Jenis UMKM: ${jenis}%0A
📱 No. WhatsApp: ${whatsapp}%0A
📝 Deskripsi: ${deskripsi}%0A
=========================%0A
Mohon dibantu untuk pendaftaran 🙏`;

  window.open(`https://wa.me/${adminWA}?text=${teks}`, "_blank");
}
