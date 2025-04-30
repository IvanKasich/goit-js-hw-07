const catNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${catNumber.length}`);
for (const category of catNumber) {
  const catName = category.querySelector("h2");
  console.log(`Category: ${catName.textContent}`);
  const catNameNumber = category.querySelectorAll("li");
  console.log(`Elements: ${catNameNumber.length}`);
}
