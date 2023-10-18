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
                    var tableHtml = "<table style='width: 100%; border:1px solid red';>";
                    tableHtml += "<tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Text</th></tr>";

                    jsonData.forEach(function(item) {
                        tableHtml += "<tr>";
                        tableHtml += "<td>" + item.id + "</td>";
                        tableHtml += "<td>" + item.name + "</td>";
                        tableHtml += "<td>" + item.phone + "</td>";
                        tableHtml += "<td>" + item.email + "</td>";
                        tableHtml += "<td>" + item.text + "</td>";
                        tableHtml += "<td>" + "<button class='btn btn-warning' >Edit</button>";
                        tableHtml += "<td>" + "<button class='btn-del' data-sid='" + item.id + "'>Delete</button>";


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


});