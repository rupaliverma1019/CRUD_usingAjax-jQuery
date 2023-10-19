<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
<h1 style="text-align: center;">Add Data</h1>
<form id="myform" class="form">
    <input type="text" id="stuid" style="display:none;"/>
    <label for="nameid" class="form-label">Name</label>
    <input type="text" class="form-control" id="nameid" />
    <label>Phone No.</label>
    <input type="number" class="form-control" id="phoneid" />
    <label>Email</label>
    <input type="email" class="form-control" id="emailid" />
    <label>Text</label>
    <input type="text" class="form-control" id="textid" />
    <button type="submit">Submit</button>
    
    
    <!-- <table class="table" >
        <h3>Show Information</h3>
        <thead>
        </thead>
    </table> -->
    
</form>
<h3 style="text-align: center;">Show Information Data</h3>
<div class="showdata">

<div id="msg" class="table"></div>
</div>
<script src="js/jqajax.js"></script>
</body>
</html>
