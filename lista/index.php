<?php session_start();
// ini_set('display_startup_errors', 1);
// ini_set('display_errors', 1);
// error_reporting(-1); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeList • Nakocloud</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="left-panel">
        <div class="link">
            <a href="../"><span>󰮧 </span>home</a>
            <a href="admin.php"><i class="bi bi-file-earmark-lock"></i>󰳍 admin</a>
        </div>
        <input type="search" onkeyup="filtruj()" id="szukajka" placeholder=" szukaj np. stereogatari...">

        <?php
        $link = mysqli_connect("localhost", "root", "", "lista_ayaya");

        mysqli_set_charset($link, "utf8");

        if (!$link) {
            die("Błąd połączenia z bazą danych: " . mysqli_connect_error());
        }

        $kwerenda = "SELECT `status`, COUNT(*) as `count` FROM `liata` GROUP BY `status`";

        echo "<table>";

        $wynik = mysqli_query($link, $kwerenda);
        while ($row = mysqli_fetch_assoc($wynik)) {
            echo "
                <tr>
                    <td>{$row['status']}</td>
                    <td>{$row['count']}</td>
                </tr>
            ";
        }
        echo "</table>";
        ?>
        <img id="coverImage" class="cover-image" src="" alt="Anime Cover">

    </div>

    <div class="right-panel">
        <?php
        $kwerenda = 'SELECT `title`, `odc`, `odc_max`, `status` FROM `liata`';
        $wynik = mysqli_query($link, $kwerenda);
        if (!$wynik) {
            error_log("Błąd SQL: " . mysqli_error($link));
            die("Wystąpił błąd przy pobieraniu danych.");
        }
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
                <td class="anime-item" data-title="' . htmlspecialchars($dane["title"]) . '">' . htmlspecialchars($dane["title"]) . '</td>
                <td>' . htmlspecialchars($dane["odc"]) . '/' . htmlspecialchars($dane["odc_max"]) . '</td>
                <td>' . htmlspecialchars($dane["status"]) . '</td>
            </tr>
            ';
        }

        echo "</table>";

        mysqli_close($link);
        ?>

    </div>

    <script type="module" src="./js/main.js"></script>
</body>

</html>