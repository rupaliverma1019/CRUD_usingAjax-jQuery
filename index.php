<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
<form id="myform">
    <label for="nameid" class="form-label">Name</label>
    <input type="text" class="form-control" id="nameid" />
    <label>Phone No.</label>
    <input type="number" class="form-control" id="phoneid" />
    <label>Email</label>
    <input type="email" class="form-control" id="emailid" />
    <label>Text</label>
    <input type="text" class="form-control" id="textid" />
    <button type="submit" id="btnadd">Submit</button>
    
    <table class="table" >
        <h3>Show Information</h3>
        <thead>
            <!-- <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Text</th>

            </tr> -->
        </thead>
    </table>
    <tbody id="tbody"></tbody>
</form>
<div id="msg"></div>
<script src="js/jqajax.js"></script>
</body>
</html>
