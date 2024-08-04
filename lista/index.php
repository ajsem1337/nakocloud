<?php session_start();
// ini_set('display_startup_errors', 1);
// ini_set('display_errors', 1);
// error_reporting(-1); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>AnimeList • Nakocloud</title>
</head>

<body>
    <div class="left-panel">
        <div class="link">
            <a href="../"><span>󰮧 </span>home</a>
            <a href="admin.php"><i class="bi bi-file-earmark-lock"></i> admin</a>
        </div>
        <input type="search" onkeyup="filtruj()" id="szukajka" placeholder=" szukaj np. stereogatari...">

        <?php
        // Połączenie z bazą danych
        $link = mysqli_connect("localhost", "root", "", "lista_ayaya");

        if (!$link) {
            die("Połączenie nieudane: " . mysqli_connect_error());
        }

        // Definicja statusów
        $statusy = [
            'wszystkie' => 'SELECT COUNT(`id`) FROM `liata`',
            'obejrzane' => 'SELECT COUNT(`id`) FROM `liata` WHERE `status`="Completed"',
            'oglądane' => 'SELECT COUNT(`id`) FROM `liata` WHERE `status`="Watching"',
            'wstrzymane' => 'SELECT COUNT(`id`) FROM `liata` WHERE `status`="On-Hold"',
            'planowane' => 'SELECT COUNT(`id`) FROM `liata` WHERE `status`="Plan to Watch"'
        ];

        // Tworzenie tabeli
        echo "<table>";

        // Pętla po statusach
        foreach ($statusy as $nazwa => $kwerenda) {
            $wynik = mysqli_fetch_array(mysqli_query($link, $kwerenda))[0];
            echo "
        <tr>
            <td>$nazwa</td>
            <td>$wynik</td>
        </tr>
    ";
        }
        echo "</table>";
        ?>

    </div>

    <div class="right-panel">
        <?php
        $kwerenda = 'SELECT `title`, `odc`, `odc_max`, `status` FROM `liata`';
        $wynik = mysqli_query($link, $kwerenda);
        echo "
            <table id='dane'>
                <tr>
                    <th>title</th>
                    <th>progress</th>
                    <th>status</th>
                </tr>
        ";

        while ($dane = mysqli_fetch_assoc($wynik)) {
            echo '
    <tr>
        <td>' . $dane["title"] . '</td>
        <td>' . $dane["odc"] . '/' . $dane["odc_max"] . '</td>
        <td>' . $dane["status"] . '</td>
    </tr>
    ';
        }

        echo "</table>";

        // Zamknięcie połączenia
        mysqli_close($link);
        ?>

    </div>

    <script src="main.js"></script>
</body>

</html>