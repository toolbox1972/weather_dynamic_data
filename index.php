<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/index.css">
  <!-- <link rel="stylesheet" href="fading.css"> -->
  <title>Weather</title>
</head>
<body>

<div class="wrapper">

    <div class="header-1">The weather report</div>

    <div class="content">

        <div class="day-1-title">Mon</div>
        <div class="day-2-title">Tue</div>
        <div class="day-3-title">Wed</div>
        <div class="day-4-title">Thu</div>
        <div class="day-5-title">Fri</div>
        <div class="day-6-title">Sat</div>
        <div class="day-7-title">Sun</div>

        <div class="day-1-icon">
            <img id="day-1-pic" src="" alt="day_1" width="80">
        </div>

        <div class="day-2-icon">
            <img id="day-2-pic" src="" alt="day_2" width="80">
        </div>

        <div class="day-3-icon">
            <img id="day-3-pic" src="" alt="day_3" width="80">
        </div>

        <div class="day-4-icon">
            <img id="day-4-pic" src="" alt="day_4" width="80">
        </div>

        <div class="day-5-icon">
            <img id="day-5-pic" src="" alt="day_5" width="80">
        </div>

        <div class="day-6-icon">
            <img id="day-6-pic" src="" alt="day_6" width="80">
        </div>

        <div class="day-7-icon">
            <img id="day-7-pic" src="" alt="day_7" width="80">
        </div>

        <div class="day-1-details"></div>
        <div class="day-2-details"></div>
        <div class="day-3-details"></div>
        <div class="day-4-details"></div>
        <div class="day-5-details"></div>
        <div class="day-6-details"></div>
        <div class="day-7-details"></div>

    </div><!--Closure content -->

    <div class="select">

        Select week: <br><br>

        <select id="search-box">
            <option value="select-week">Week:</option>
             <option value="1">1</option>
             <option value="2">2</option>
        </select>

        <button
                id="submit"
                type="button"
                name="button"
                onclick="dynamicInsertOfPicture()"
                >
                submit
        </button>

    </div>

</div> <!--Closure wrapper -->

<!-- Javascript -->
<script src="js/index.js"></script>

</body>
</html>
