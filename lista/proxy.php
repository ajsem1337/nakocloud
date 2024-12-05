<?php
// Adres API AniList
$apiUrl = 'https://graphql.anilist.co';

// Odczytaj dane wysłane z front-endu (czyli zapytanie GraphQL)
$postData = file_get_contents('php://input');

// Utwórz zapytanie cURL do API AniList
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept: application/json'
));
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

// Odbierz odpowiedź z API AniList
$response = curl_exec($ch);

// Zamknij połączenie cURL
curl_close($ch);

// Wyślij odpowiedź z API z powrotem do klienta (przeglądarki)
header('Content-Type: application/json');
echo $response;
?>
