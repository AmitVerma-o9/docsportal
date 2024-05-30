

//dropdown of release version

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sm-1711626590482459-1').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        var dropdownMenu = document.getElementById('sm-1711626590482459-2');
        if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'flex';
            this.setAttribute('aria-expanded', 'true');
        } else {
            dropdownMenu.style.display = 'none';
            this.setAttribute('aria-expanded', 'false');
        }
    });
});

//search bar.
// alert(searchInput);
// console.log(searchInput.value);


// console.log(searchInput.value);


