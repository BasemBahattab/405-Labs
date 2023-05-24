<?php 
function get_all_todos()
{
    $get_all_tasks_query = "SELECT id, task, date_added, done FROM tasks WHERE done = 0;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    if ($response && $response->num_rows > 0) {
        echo '<ul id="my-list">';
        while ($row = $response->fetch_array()) {
            echo "<li>".'<input type="checkbox" name="checkBoxList[]" value="'.$row["id"].'"><span>'.$row["task"]."</span> <span> &nbsp;'".$row["date_added"]. "</li>";
        }
        echo '</ul>';
    } else {
        echo '<h2>Your ToDo list is empty!</h2>';
    }
}

function get_done_todos()
{
    $get_all_tasks_query = "SELECT id, task, date_added, done FROM tasks WHERE done = 1;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    if ($response && $response->num_rows > 0) {
        echo '<ul id="my-list">';
        while ($row = $response->fetch_array()) {
            echo "<li>".'<input type="checkbox" name="checkBoxList[]" value="'.$row["id"].'"><span>'.$row["task"]."</span> <span> &nbsp;'".$row["date_added"]. "</li>";
        }
        echo '</ul>';
    } else {
        echo '<h2>Your ToDo list is empty!</h2>';
    }
}
?>