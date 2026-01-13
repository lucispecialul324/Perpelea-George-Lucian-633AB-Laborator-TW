<?php
// Includem conexiunea ta care definește variabila $pdo
require_once 'db_connect.php';

header("Content-Type: application/json");

// Identificăm metoda HTTP (GET sau POST) [cite: 4, 33]
$metoda = $_SERVER['REQUEST_METHOD'];

try {
    // 1. Metoda GET: Returnează lista de studenți [cite: 94]
    if ($metoda === 'GET') {
        $sql = "SELECT * FROM evidenta_studenti";
        $stmt = $pdo->query($sql);
        $studenti = $stmt->fetchAll();
        
        // Trimitem răspunsul JSON înapoi la browser [cite: 72, 109]
        echo json_encode($studenti);
    }

    // 2. Metoda POST: Adaugă un student nou [cite: 98]
    if ($metoda === 'POST') {
        // Preluăm datele JSON din body-ul cererii [cite: 99]
        $json_data = file_get_contents("php://input");
        $date = json_decode($json_data, true);
        
        if (isset($date['nume'], $date['anul'], $date['media'])) {
            // Folosim Prepared Statements pentru securitate
            $sql = "INSERT INTO evidenta_studenti (nume, anul, media) VALUES (:nume, :anul, :media)";
            $stmt = $pdo->prepare($sql);
            
            $success = $stmt->execute([
                ':nume'  => $date['nume'],
                ':anul'  => intval($date['anul']),
                ':media' => floatval($date['media'])
            ]);

            if ($success) {
                echo json_encode(["success" => true]); // Semnalăm succesul către FETCH [cite: 102]
            }
        } else {
            echo json_encode(["success" => false, "error" => "Date incomplete"]);
        }
    }
} catch (Exception $e) {
    // În caz de eroare SQL, trimitem detaliile în format JSON
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>