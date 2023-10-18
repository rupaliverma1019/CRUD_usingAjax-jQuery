$(document).ready(function() {
    //Ajax code for Retrieving Data
    function showdata() {
        $.ajax({
            url: "retrieve.php",
            method: "GET",
            success: function(data) {
                // Parse the JSON data
                var jsonData = JSON.parse(data);

                // Process the retrieved data here
                if (jsonData.length > 0) {
                    var tableHtml = "<table style='width: 100%';>";
                    tableHtml += "<tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Text</th></tr>";

                    jsonData.forEach(function(item) {
                        tableHtml += "<tr>";
                        tableHtml += "<td>" + item.id + "</td>";
                        tableHtml += "<td>" + item.name + "</td>";
                        tableHtml += "<td>" + item.phone + "</td>";
                        tableHtml += "<td>" + item.email + "</td>";
                        tableHtml += "<td>" + item.text + "</td>";
                        tableHtml += "<td>" + "<button class='btn-edit'  style='background-color: yellow; padding :5px 15px;' >Edit</button>";
                        tableHtml += "<td>" + "<button class='btn-del' style='background-color: red ; padding :5px;' data-sid='" + item.id + "'>Delete</button>";


                        tableHtml += "</tr>";
                    });

                    tableHtml += "</table>";

                    // Display the table on the webpage
                    $("#msg").html(tableHtml);
                } else {
                    $("#msg").html("No data found.");
                }
            }
        });
    }

    // Call the showdata() function after the DOM is fully loaded
    showdata();

    // Ajax Request for Insert Data
    $("#myform").submit(function(e) {
        e.preventDefault();

        let nm = $("#nameid").val();
        let ph = $("#phoneid").val();
        let em = $("#emailid").val();
        let txt = $("#textid").val();
        mydata = { name: nm, phone: ph, email: em, text: txt };
        console.log(mydata);
        $.ajax({
            url: "insert.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function(data) {
                alert("Data added:", data);
                var msg = "<div>" + data + "</div>";
                $("#msg").html(msg);
                showdata();
                $("#myform")[0].reset();
            },
        })
    });
    // Ajax Request for Deleting Data
    $("#msg").on("click", ".btn-del", function() {
        console.log("delete button clicked");
        let id = $(this).attr("data-sid");
        // console.log(id);
        mydata = { sid: id };
        $.ajax({
            url: "delete.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function(data) {
                alert(data);
                var msg = "<div>" + data + "</div>";
                $("#msg").html(msg);
                showdata();
            }
        })


    });



    // updating the data
    // Function to populate the editing form with data for a specific ID
    // Function to populate the editing form with data for a specific ID
    function populateEditForm(id) {
        $.ajax({
            url: "retrieve.php", // Replace with the URL to fetch data for a specific ID
            method: "POST",
            data: JSON.stringify({ id: id }),
            success: function(data) {
                var rowData = JSON.parse(data);
                $("#edit-id").val(rowData.id);
                $("#edit-name").val(rowData.name);
                $("#edit-phone").val(rowData.phone);
                $("#edit-email").val(rowData.email);
                $("#edit-text").val(rowData.text);
            }
        });
    }

    // Handle the click event for the "Edit" button
    $("#msg").on("click", ".btn-edit", function() {
        var id = $(this).attr("data-sid");
        populateEditForm(id);
    });

    // Handle the submit event for the edit form (Update Data)
    $("#edit-form").submit(function(e) {
        e.preventDefault();

        var id = $("#edit-id").val();
        var name = $("#edit-name").val();
        var phone = $("#edit-phone").val();
        var email = $("#edit-email").val();
        var text = $("#edit-text").val();

        var editData = { id: id, name: name, phone: phone, email: email, text: text };

        $.ajax({
            url: "update.php", // Create an update script
            method: "POST",
            data: JSON.stringify(editData),
            success: function(data) {
                // Handle success (e.g., show a message to the user)
                alert("Data updated: " + data);
                // Optionally, refresh the data table
                showdata();
            }
        });
    });


});