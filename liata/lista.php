<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>...</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="main.css">
</head>

<body>

  <div id="container">

    <nav>
      <div id="title">
        <h1>lista ayaya</h1>
      </div>

      <div id="szukaj">
        <input type="search" placeholder="np. stereogatari" id="szukajka" onkeyup="filtruj()">
      </div>

      <div id="a">
        <a href="../index.html">główna</a>
        <a href="admin.php">zaloguj</a>
      </div>
    </nav>

    <div id="main">

      <div id="staty">
        <?php
        // Tabelka do sortowania
        echo '
        <h3>Sortowanie</h3>
        <hr>
        <form action="./" method="POST">
          <table class="tab">
            <tr>
              <th>Status</th>
              <th>Sortowanie</th>
              <th>Kierunek</th>
            </tr>
            <tr>
                <td>Oglądane <input type="checkbox" name="" class="cb" checked ></td>
              <td>ID <input type="radio" name="rad" class="rad" value="id"></td>
              <td>Rosnąco <input type="radio" name="meh" class="rad" value="asc" checked></td>
            </tr>
            <tr>
              <td>Obejrzane <input type="checkbox" name="" class="cb" checked></td>
              <td>Nazwa <input type="radio" name="rad" class="rad" value="nazwa" checked></td>
              <td>Malejąco <input type="radio" name="meh" class="rad" value="desc"></td>
            </tr>
            <tr>
              <td>Wstrzymane <input type="checkbox" name="" class="cb" checked></td>
              <td>Odcinki <input type="radio" name="rad" class="rad" value="odcinki"></td>
            </tr>
            <tr>
              <td>Planowane <input type="checkbox" name="" class="cb" checked></td>
              <td>Status <input type="radio" name="rad" class="rad" value="status"></td>
              <td ><input type="submit" name="sort" id="button" value="Zastosuj"></td>
            </tr>
          </table>
          </form>
          ';


        // Statystyki
        $db = mysqli_connect('localhost', 'root', '', 'liata') or die;
        // Oglądane
        $sql = 'SELECT COUNT(`id`) FROM `liata` WHERE `my_status`="Watching"';
        $wynik = mysqli_fetch_array(mysqli_query($db, $sql))[0];

        echo "
            <h3>Podsumowanie</h3>
              <hr>
              <table>
                <tr>
                  <td>Oglądane</td>
                  <td>$wynik</td>
                </tr>";
        //Obejrzane       
        $sql = 'SELECT COUNT(`id`) FROM `liata` WHERE `my_status`="Completed"';
        $wynik = mysqli_fetch_array(mysqli_query($db, $sql))[0];

        echo "<tr>
                  <td>Ukończone</td>
                  <td>$wynik</td>
                </tr>";
        //wstrzymane
        $sql = 'SELECT COUNT(`id`) FROM `liata` WHERE `my_status`="On-Hold"';
        $wynik = mysqli_fetch_array(mysqli_query($db, $sql))[0];

        echo "<tr>
                  <td>Porzucone</td>
                  <td>$wynik</td>
                </tr>";
        //planowane
        $sql = 'SELECT COUNT(`id`) FROM `liata` WHERE `my_status`="Plan to Watch"';
        $wynik = mysqli_fetch_array(mysqli_query($db, $sql))[0];

        echo "<tr>
                  <td>Planowane</td>
                  <td>$wynik</td>
                </tr>";
        //rewatchowane
        $sql = 'SELECT SUM(`total_times_watched`) FROM `liata`';
        $wynik = mysqli_fetch_array(mysqli_query($db, $sql))[0];

        echo "<tr>
                  <td>Rewatched</td>
                  <td>$wynik</td>
                </tr>
              </table>
              <h3>Ostatnio Aktualizowane</h3>
              <hr>
              <table class='tab'>";
        $sql = 'SELECT `series_title`, `my_watched_episodes`,`series_episodes`, `my_status`, `my_finish_date` FROM `liata`ORDER BY `my_finish_date` DESC limit 5';
        $wynik = mysqli_query($db, $sql);
        echo "<tr>
                  <th>Nazwa</th>
                  <th>Odcinki</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>";

        while ($dane = mysqli_fetch_assoc($wynik)) {
          echo "<tr>
                  <td>" . $dane["series_title"] . "</td>
                  <td class='center'> " . $dane["my_watched_episodes"] . " / " . $dane["series_episodes"] . "</td>
                  <td class='center'>" . $dane["my_status"] . "</td>
                  <td class='center'>" . $dane["my_finish_date"] . "</td>
                </tr>";
        }
        echo "</table>";

        mysqli_close($db);
        ?>

      </div>

      <div id="lista">
        <?php
        $db = mysqli_connect('localhost', 'root', '', 'liata') or die;
        $sql = 'SELECT `series_title`, `my_watched_episodes`,`series_episodes`, `my_status`, `total_times_watched` FROM `liata`';

        if (isset($komenda)) {
          $sql .= $komenda;
        }

        $wynik = mysqli_query($db, $sql);
        $lp = 1;

        echo "<table id='dane'>
                  <tr>
                    <th style='width:30px'>Lp.</th>
                    <th style='width:800px'>Nazwa</th>
                    <th style='width:100px'>Odcinki</th>
                    <th style='width:100px'>Status</th>
                    <th style='width:100px'>Retwatch</th>
                  </tr>";

        while ($dane = mysqli_fetch_assoc($wynik)) {

          echo '<tr>
                    <td class="center" ><div>' . $lp . '</div>
                    <td>' . $dane["series_title"] . '</td>
                    <td class="center">' . $dane["my_watched_episodes"] . " / " . $dane["series_episodes"] . '</td>
                    <td class="center">' . $dane["my_status"] . '</td>
                    <td class="center">' . $dane["total_times_watched"] . '</td>
                  </tr>';

          $lp += 1;
        }

        echo "</table>";
        mysqli_close($db);
        ?>
      </div>
    </div>
  </div>
  <script src="main.js"></script>
</body>

</html>