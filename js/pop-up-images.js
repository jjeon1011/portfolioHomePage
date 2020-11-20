const galleryImage = document.getElementById("gallery-image");
const fullImage = document.getElementById("full-image");

const showFullImage = function (address) {
	galleryImage.style.display = "block";
	fullImage.src = address;
}

const closeGallery = function () {
	galleryImage.style.display = "none";
}

