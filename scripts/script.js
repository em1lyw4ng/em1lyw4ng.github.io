// get all work items
const workItems = document.querySelectorAll('.work-image');
const imageDisplay = document.getElementById('image-modal');
const wipImage = document.getElementById('wip-image');

// add on click event listeners
workItems.forEach(item => {
    item.addEventListener('click', function () {
        // get wip image
        const imageSrc = this.getAttribute('data-image');
        if (imageSrc) {
            wipImage.src = imageSrc;
            imageDisplay.classList.add('active');
        }
    });
});

// if outside of wip image then stop displaying
imageDisplay.addEventListener('click', function (event) {
    if (event.target !== wipImage) {
        imageDisplay.classList.remove('active');
    }
});
