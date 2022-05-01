function Header (data) { 

    return `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/ebe73488df.js" crossorigin="anonymous"></script>

    <title>My Team</title>
  </head>
  
  <body>

    <nav class="navbar navbar-light justify-content-center" style="background-color: #ed6060;">
        <!-- Navbar content -->
        <h1 class="text-light">My Team</h1>
    </nav>

    <div class="col-12 col-md-9">
        <section class="row justify-content-around">`
}

module.exports = Header;