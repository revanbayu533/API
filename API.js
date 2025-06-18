function generateQR() {
  const textarea = document.querySelector("textarea");
  const qrImg = document.querySelector("img");
  const text = textarea.value;

  if (text.trim() === "") {
    alert("Please enter text or URL");
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
}