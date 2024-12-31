
const voucherInput = document.getElementById('voucher-code');
const applyVoucherBtn = document.getElementById('apply-voucher');
const subtotalEl = document.getElementById('subtotal');
const shippingFeeEl = document.getElementById('shipping-fee');
const totalAmountEl = document.getElementById('total-amount');


const voucherDiscounts = {
  "SALE50": 0.5,
  "SALE20": 0.2,
};


applyVoucherBtn.addEventListener('click', () => {
  const voucherCode = voucherInput.value.trim().toUpperCase();
  const originalSubtotal = 500000; 
  const shippingFee = 30000; 

  if (voucherDiscounts[voucherCode]) {
    const discount = voucherDiscounts[voucherCode];
    const newSubtotal = originalSubtotal * (1 - discount);
    subtotalEl.textContent = `${newSubtotal.toLocaleString()}₫`;
    const total = newSubtotal + shippingFee;
    totalAmountEl.textContent = `${total.toLocaleString()}₫`;
    alert(`Áp dụng mã ${voucherCode} thành công! Bạn được giảm ${discount * 100}%.`);
  } else {
    alert("Mã giảm giá không hợp lệ!");
  }
});
