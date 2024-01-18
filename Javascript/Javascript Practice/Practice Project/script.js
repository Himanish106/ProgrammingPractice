const content = "This is a random whatsapp content";
document.getElementById("share").addEventListener("click", () => {
    console.log("clicked")
  let whatsappURL = "whatsapp://send?text=" + encodeURIComponent(content);
  window.location.href = whatsappURL;
});
