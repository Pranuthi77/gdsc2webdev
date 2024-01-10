
<html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
      }

      #logo-container {
        display: flex;
        align-items: center;
        margin-left: 20px;
        font-weight: bold;
      }

      #blue-star {
        font-size: 1.6em;
        color: blue;
        margin-right: 10px;
      }

      nav {
        display: flex;
        align-items: center;
        margin-right: 20px;
      }

      nav a {
        text-decoration: none;
        color: #333;
        margin: 19px;
      }

      .down-arrow {
        font-size: 1em;
        margin-right: 10px;
      }

      input[type='text'] {
        padding: 7px; margin-left: 20px;
      }
    </style>
  </head>
  <body>
    <div id="logo-container">
      <div id="blue-star">&#9733;</div>
      <div id="logo">Logo</div>
    </div>

    <nav>
      <a href="#">Home</a>
      <a href="#">Products</a>
      <div class="down-arrow">&#9660;</div>
      <a href="#">About</a>
      <a href="#">Pricing</a>

      <input
        type="text"
        placeholder="Search for anything"
      />
    </nav>
  </body>
</html>
</html>