<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link type="text/css" rel="stylesheet" href="./style.css">
  <title>My ToDo List App</title>
</head>
  <body>
    <?php 
    // enable mysql error reporting for debugging only
    // $driver = new mysqli_driver();
    // $driver->report_mode = MYSQLI_REPORT_ALL;
    require_once('./db_connection.php');
    require('./insert_todo.php');
    require('./get_todos.php');
    require('./update_todo.php');
    require('./delete_todo.php');
    
?>

    <div id="content">
        <h1>My ToDo List App</h1> 
        <a href="index.php">&nbsp;Back to ToDo List App</a>
        <form method="post" id="addForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
           <input type="text" name="new_task" id="new-item" placeholder="A new item..." />
           <button name="add_btn" id="add-btn">Add</button>
           <?php get_all_todos();?>
        </form>
    </div>
  </body>
</html>