<?php 

class Connection{

  // Create connection
  public function conn(){
        try {
            $conn = new PDO("mysql:host=localhost;dbname=aws-quiz",'root',"");
            return $conn;

          } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
          }
}


}



// $checkConn = new connection();
// $checkConn -> conn();


class GetData extends Connection{



    
  public function ShowData()
  {
      $query = $this->conn()->prepare("SELECT question.choix0, question.Explication, question.RightAnswer, question.Answer, choices.choix1, choices.choix2, choices.choix3, choices.choix4 FROM question INNER JOIN choices on question.id = choices.id");
      $query->execute();
      return $query->fetchAll();
     
  }



}

$data= new GetData();
$all_data = $data ->ShowData();
echo json_encode($all_data);






















?>