const url = "https://http.cat/";

const resCodes = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
  301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
  424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
  503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
];
let div = document.querySelector("#imgsContainer");

async function getimg(code) {
  const res = await fetch(url + code);
  if (!res.ok) {
    console.error(`Failed to fetch image for code ${code}`);
    return null;
  }
  return res.url;
}

async function appendImages() {
  for (let i = 0; i < resCodes.length; i += 3) {
    const rowHolder = document.createElement("div");
    rowHolder.classList.add("row", "justify-content-center");

    for (let j = 0; j < 3 && i + j < resCodes.length; j++) {
      const code = resCodes[i + j];
      const imgSrc = await getimg(code);

      if (imgSrc) {
        const imgholder = document.createElement("div");
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.objectFit = "cover";
        img.classList.add("img-fluid");
        imgholder.classList.add("col-sm-4", "col-12");
        imgholder.append(img);
        rowHolder.appendChild(imgholder);
      }
    }

    div.appendChild(rowHolder);
  }
}

appendImages();
