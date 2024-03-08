const numPages = 8;
let page = 1;

document.addEventListener("keydown", function(event) {
	switch (event.key) {
    case "ArrowLeft":
    case "ArrowUp": up(); break;
    case "ArrowRight":
    case "ArrowDown": down(); break;
		default: return;
	}
	event.preventDefault();
});

function up() {
  page--;
  if (page < 1) page = numPages;
  update();
}

function down() {
  page++;
  if (page > numPages) page = 1;
  update();
}

function update() {
  pdf.src = `pdf/artwork${page}.pdf#toolbar=0&navpanes=0&scrollbar=0`;
}
