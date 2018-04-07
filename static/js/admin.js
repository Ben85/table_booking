admin = {
    _allIndieBooking: "",
    _allCompanyBookings: "",
    getAllIndividualBookingsFromDatabase: function() {
        $.getJSON('/get-individual-bookings', function(response){
            admin._allIndieBooking = response;
            let tableBody = document.createElement("tbody");
            for (let row = 0; row < response.length; row++) {
                var tableRow = document.createElement("tr");
                //tableRow.className = "residents-info";
                let columns = ["name", "email", "phone_number", "booked_tables", "date_time"];
                for (let i = 0; i < columns.length; i++) {
                    var tableData = document.createElement("td");
                    var tempItem = document.createTextNode(response[row][columns[i]]);
                    tableData.appendChild(tempItem);
                    tableRow.appendChild(tableData);
                }
                tableBody.appendChild(tableRow);
            }
            let individualTable = document.getElementById("individual_table");
            individualTable.appendChild(tableBody);
        })
    },
    getAllCompanyBookingsFromDatabase: function() {
        $.getJSON('/get-company-bookings', function(response) {
            admin._allCompanyBookings = response;
            admin.displayAllCompanyBookings();
        })
    },
    displayAllCompanyBookings: function () {
        let tableBody = document.getElementById("company_body");
        tableBody.innerHTML = "";
        for (let row = 0; row < admin._allCompanyBookings.length; row++) {
            var tableRow = document.createElement("tr");
            //tableRow.className = "residents-info";
            let columns = [
                "name",
                "email",
                "phone_number",
                "booked_tables",
                "zip_code",
                "city",
                "street_address",
                "street_type",
                "street_num",
                "floor_door",
                "vat_number",
                "date_time"
            ];
            for (let i = 0; i < columns.length; i++) {
                var tableData = document.createElement("td");
                var tempItem = document.createTextNode(admin._allCompanyBookings[row][columns[i]]);
                tableData.appendChild(tempItem);
                tableRow.appendChild(tableData);
            }
            tableBody.appendChild(tableRow);
        }
        let companyTable = document.getElementById("company_table");
        companyTable.appendChild(tableBody);

    },

    // sortIndiBookings: function() {
    //     let indiName = document.getElementById("indi_name");
    //     indiName.addEventListener('click', function() {
    //         $.post('/new-booking', {
    //             criteria: newName,
    //
    //         });
    //     })
    // }
};

admin.getAllCompanyBookingsFromDatabase();
admin.getAllIndividualBookingsFromDatabase();