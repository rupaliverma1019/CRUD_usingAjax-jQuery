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
                    var tableHtml = "<table>";
                    tableHtml += "<tr><th>Name</th><th>Phone</th><th>Email</th><th>Text</th></tr>";

                    jsonData.forEach(function(item) {
                        tableHtml += "<tr>";
                        tableHtml += "<td>" + item.name + "</td>";
                        tableHtml += "<td>" + item.phone + "</td>";
                        tableHtml += "<td>" + item.email + "</td>";
                        tableHtml += "<td>" + item.text + "</td>";
                        tableHtml += "<td>" + "<button class='btn btn-warning' >Edit</button>";
                        tableHtml += "<td>" + "<button>Delete</button>";

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

        // console.log("Save Button Clicked");
        // console.log("Name:", nm);
        // console.log("Phone No.:", ph);
        // console.log("Email:", em);
        // console.log("Text:", txt);

        mydata = { name: nm, phone: ph, email: em, text: txt };
        console.log(mydata);


        $.ajax({

            url: "insert.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function(data) {
                console.log("Response from server:", data);
                var msg = "<div>" + data + "</div>";
                $("#msg").html(msg);
                $("#myform")[0].reset();
            },


        })


    });
});