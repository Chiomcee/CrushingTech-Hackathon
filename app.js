document.addEventListener('DOMContentLoaded', function() {
    var notification = document.querySelector('.notification');
    var alertMenu = document.querySelector('.alert-menu');
    const cardListContainer = document.querySelector('.card-list-container');
    var profile = document.querySelector('.profile');
    var topbarMenu = document.querySelector('.topnav-menu');
    const svgIcon = document.querySelector('#svgIcon');
    const banner = document.querySelector('#banner');
    const checkbox = document.getElementById('svgToggle');
    const radiobutton = document.querySelectorAll('.radio-button');
    const radiobuttons = document.querySelectorAll('.radio-button');

    function toggleAlertMenu() {
        alertMenu.classList.toggle('open-menu');
    }

    function toggleTopbarMenu() {
        topbarMenu.classList.toggle('open-menu');
    }

    function handleDocumentClick(event) {
        if (event.target !== notification) {
            alertMenu.classList.remove('open-menu');
        }

        if (event.target !== profile) {
            topbarMenu.classList.remove('open-menu');
        }
    }

    function handleSvgClick() {
            banner.remove();
    }
    
    notification.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleAlertMenu();
        topbarMenu.classList.remove('open-menu');
    });

    profile.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleTopbarMenu();
        alertMenu.classList.remove('open-menu');
    });

    svgIcon.addEventListener('click', handleSvgClick);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
          cardListContainer.style.maxHeight = '1000px'; 
        } else {
          cardListContainer.style.maxHeight = '0';
        }
      });

    radiobuttons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const subList = this.closest('.sub-list');
            const allSubLists = document.querySelectorAll('.sub-list');

            if (this.checked) {
                allSubLists.forEach(function(list) {
                    list.style.background = '#ffffff';
                });
                subList.style.background = '#f1f1f1'; 
            }
        });
    });


    document.addEventListener('click', handleDocumentClick);

});


