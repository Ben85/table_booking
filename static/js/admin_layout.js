admin_layout = {

    init: function () {
        this.notificationDivEventListener();
    },

    notificationDivEventListener: function () {
        let notificationDiv = document.getElementById("notification_bell");
        notificationDiv.addEventListener('click', function () {
            let notificationDropdown = document.getElementById("notification_dropdown");
            let style = window.getComputedStyle(notificationDropdown);
            style.getPropertyValue("opacity") === "1" ? notificationDropdown.style.opacity = "0" : notificationDropdown.style.opacity = "1";
            console.log("mouseover");
        });
    }

};

admin_layout.init();