const range = document.getElementById("range");
const rangeOverlay = document.getElementById("rangeOverlay");

const valueText = document.getElementById("valueText");
const valueTextOverlay = document.getElementById("valueTextOverlay");

const mainContent = document.getElementById("mainContent");
const overlay = document.getElementById("overlay");
const sheet = document.getElementById("sheet");
const closeSheet = document.getElementById("closeSheet");

const quickBtns = document.querySelectorAll(".quick-btn");
const bars = document.querySelectorAll(".bar");

let opened = false;
let savedValue = 50;

function formatMoney(value){
  value = Number(value);
  const decimals = value > 999 ? 0 : 2;

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function updateRangeProgress(input){
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);

  const progress = ((value - min) / (max - min)) * 100;

  input.style.setProperty("--range-progress", `${progress}%`);
}

function updateAllRangeProgress(){
  updateRangeProgress(range);
  updateRangeProgress(rangeOverlay);
}

function openSheet(){
  mainContent.classList.add("blurred");
  overlay.classList.add("active");
  sheet.classList.add("active");
  opened = true;
}

function closeOverlay(){
  mainContent.classList.remove("blurred");
  overlay.classList.remove("active");
  sheet.classList.remove("active");
  opened = false;
}

function animateBars(){
  bars.forEach(bar => {
    bar.classList.remove("animate");
    void bar.offsetWidth;
    bar.classList.add("animate");
  });
}

function clearQuickSelection(){
  quickBtns.forEach(btn => {
    btn.classList.remove("selected");
  });
}

function selectQuickButton(value){
  clearQuickSelection();

  quickBtns.forEach(btn => {
    if(Number(btn.dataset.value) === Number(value)){
      btn.classList.add("selected");
    }
  });
}

function updateInputPreview(value){
  value = Number(value);

  valueText.textContent = formatMoney(value);
  valueTextOverlay.textContent = formatMoney(value);

  range.value = value;
  rangeOverlay.value = value;

  updateAllRangeProgress();
}

function updateDiscountValues(value){
  value = Number(value);
  savedValue = value;

  updateInputPreview(value);

  const discount = value * 0.15;
  const newMonth = value - discount;

  const oldYear = value * 12;
  const newYear = newMonth * 12;

  document.getElementById("oldMonth").textContent = `R$ ${formatMoney(value)}`;
  document.getElementById("newMonth").textContent = `R$ ${formatMoney(newMonth)}`;
  document.getElementById("oldYear").textContent = `R$ ${formatMoney(oldYear)}`;
  document.getElementById("newYear").textContent = `R$ ${formatMoney(newYear)}`;

  const meses = [0, 1, 2, 3, 4, 5, 12];

  meses.forEach(mes => {
    const economia = discount * mes;

    const bar = document.getElementById(`bar${mes}`);
    const text = document.getElementById(`mes${mes}`);

    text.textContent = `R$ ${formatMoney(economia)}`;

    const altura = mes === 0 ? 0 : (mes / 12) * 100;

    bar.style.height = `${altura}%`;
  });

  animateBars();
}

function commitAndOpen(value){
  updateDiscountValues(value);

  if(!opened){
    openSheet();
  }
}

range.addEventListener("input", () => {
  clearQuickSelection();
  updateInputPreview(range.value);
});

range.addEventListener("change", () => {
  clearQuickSelection();
  commitAndOpen(range.value);
});

range.addEventListener("pointerup", () => {
  clearQuickSelection();
  commitAndOpen(range.value);
});

range.addEventListener("touchend", () => {
  clearQuickSelection();
  commitAndOpen(range.value);
});

rangeOverlay.addEventListener("input", () => {
  clearQuickSelection();
  updateInputPreview(rangeOverlay.value);
});

rangeOverlay.addEventListener("change", () => {
  clearQuickSelection();
  updateDiscountValues(rangeOverlay.value);
});

rangeOverlay.addEventListener("pointerup", () => {
  clearQuickSelection();
  updateDiscountValues(rangeOverlay.value);
});

rangeOverlay.addEventListener("touchend", () => {
  clearQuickSelection();
  updateDiscountValues(rangeOverlay.value);
});

quickBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    selectQuickButton(value);
    commitAndOpen(value);
  });
});

closeSheet.addEventListener("click", () => {
  updateInputPreview(savedValue);
  closeOverlay();
});

overlay.addEventListener("click", () => {
  updateInputPreview(savedValue);
  closeOverlay();
});

updateDiscountValues(50);
