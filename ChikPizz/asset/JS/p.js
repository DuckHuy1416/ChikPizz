
function saveInfo(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const note = document.getElementById("note").value;

  if (name && address && phone) {
      
      localStorage.setItem("shippingInfo", JSON.stringify({
          name: name,
          address: address,
          phone: phone,
          note: note
      }));

      window.location.href = "methor.html"; 
  } else {
      alert("Vui lòng điền đầy đủ thông tin!");
  }
}
