let mainBox = document.querySelectorAll(".main-box");
let cartSide = document.querySelector(".pro-container-cart");
let cartIcon = document.querySelector(".cart");
let cartSection = document.querySelector(".cart-container");
let exitBtn = document.querySelector(".ex-btn");
let trashBtn = document.querySelectorAll(".trash-btn");
let buyNow = document.querySelector(".Buy");
let addToCart = document.querySelectorAll(".add-to-cart");
cartIcon.addEventListener("click", () => {
  cartSection.style.right = "10px";
});
exitBtn.addEventListener("click", () => {
  cartSection.style.right = "-100%";
});
trashBtn.forEach((e) => {
    e.parentElement.remove();
});
buyNow.addEventListener("click", () => {
  trashBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
    });
  if (mainBox.length >= 1) {
    let msg = document.querySelector(".msg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  }
});


addToCart.forEach((plus) => {plus.addEventListener("click", () => {
  cartSection.style.right = "10px";
  let pro = document.createElement("div");
  pro.classList.add("main-box");
  pro.innerHTML = `
  <div class="product-box">
    <img src="./assest/images/pen.jpg" alt="" />
    <div class="product-information">
      <h3 class="product-title">Ink Pen</h3>
      <span class="product-price">$16</span>
    </div>
  </div>
  <div class="trash-btn">
    <i class="fa-solid fa-trash"></i>
  </div>
  `;
  cartSide.appendChild(pro);
})})})
