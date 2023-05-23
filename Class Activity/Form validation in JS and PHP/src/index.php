<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form validation in JS & PHP</title>
    <style>
        body {
            background-color: grey;
            display: flex;
            padding: 1;
            margin: 1;
        }

        .container {
            display: flex;
        }

        .container .choice {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }

        .input-field {
            position: absolute;
            top: 5%;
            gap: 1rem;
        }

        #after-sign-in header {
            font-size: 30px;
            font-weight: bold;
        }

        #after-sign-in textarea {
            margin-top: 5px;
            font-size: 15px;
            height: 100px;
            width: 400px;
            outline: none;
            resize: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="choice" id="choices" hidden="hidden">
            <button id="sign_in_btn" onclick="enableDisableSignIn()">Sign in</button>
            <button id="sign_up_btn" onclick="enableDisableSignUp()">Sign up</button>
        </div>

        <div class="input-field" id="sign-up" hidden="hidden">
            <form action="index.php" method="post">
                <label>Email</label>
                <input type="email" name="emailSignUp" id="input-user" required>

                <label>Username</label>
                <input type="text" name="unameSignUp" id="input-user" required>

                <label>Password</label>
                <input type="password" name="pwSignUp" id="input-user" required>

                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div class="input-field" id="sign-in" hidden="hidden">
            <form action="index.php" method="post">
                <label>Email</label>
                <input type="email" name="emailSignIn" id="input-user" required>

                <label>Password</label>
                <input type="password" name="pwSignIn" id="input-user" required>

                <button type="submit">Sign In</button>
            </form>
        </div>
        <div class="input-field" id="after-sign-in" hidden="hidden">
            <form action="index.php" method="post">
                <header>Contact Us</header>
                <label>Comment</label>
                <br>
                <textarea name="comment" id="user-input"></textarea>
                <br>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>

    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "commentsection";
    
    $conn = new mysqli($servername, $username, $password, $database);
    
    // check the connection
    if ($conn->connect_error) {
        // exit and kill this process
        echo "Failed to connect to database!";
        die("Connection failed: ");
    }
    
    session_unset();
    if (isset($_POST['emailSignUp'])) {
        $email = validate_input($_POST['emailSignUp']);
        $uname = validate_input($_POST['unameSignUp']);
        $pw = validate_input($_POST['pwSignUp']);

        $insert_statement = $GLOBALS['conn']->prepare("INSERT INTO user (email, username, password) VALUES(?, ?, ?);");

        if ($insert_statement) {
            $insert_statement->bind_param("sss", $email, $uname, $pw);

            if (!$insert_statement->execute() || $insert_statement->affected_rows != 1) {
                print_r('Error executing MySQL insert statement: ' . $insert_statement->err);
                return;
            }
        }
    }

    if (isset($_POST['emailSignIn'])) {
        $email = validate_input($_POST['emailSignIn']);
        $pw = validate_input($_POST['pwSignIn']);

        $auth_statement = $GLOBALS['conn']->prepare("SELECT * FROM user WHERE email = ? AND password = ?");

        $auth_statement->bind_param("ss", $email, $pw);

        $auth_statement->execute();
        $results = $auth_statement->get_result();

        if ($results->num_rows == 1) {
                session_name($email);
                echo "<script>function sign_in_accept() { const comment_section =document.getElementById(\"after-sign-in\"); comment_section.removeAttribute(\"hidden\", \"hidden\"); } sign_in_accept();</script>";
                echo "<script>function disableChoices() {const choices =document.getElementById(\"choices\");choices.display = \"display: none;\";} disableChoices();</script>";
        }
    }

    if(isset($_POST['comment'])) {
        $comment = validate_input($_POST['comment']);

        $insert_comment_statement = $GLOBALS['conn']->prepare("INSERT INTO comment (username, comment) VALUES(?, ?);");
    
        if ($insert_comment_statement) {
            $un = session_name();
            $insert_comment_statement->bind_param("ss", $un, $comment);

            if (!$insert_statement->execute() || $insert_comment_statement->affected_rows != 1) {
                print_r('Error executing MySQL insert statement: ' . $insert_comment_statement->err);
                return;
            }
        }
    }


    function validate_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    $conn->close();
    ?>

    <script>
        const signUpBtn = document.getElementById("sign_up_btn");
        const signInBtn = document.getElementById("sign_in_btn");

        const sign_up_div = document.getElementById("sign-up");
        const sign_in_div = document.getElementById("sign-in");
        const comment_div = document.getElementById("after-sign-in");

        var enable_signup = false;
        var enable_signin = false;

        function enableDisableSignUp() {
            if (enable_signin == true) {
                sign_in_div.setAttribute("hidden", "hidden");
                enable_signin = !enable_signin;
                signUpBtn.disabled = false;
                signInBtn.disabled = true;
            }
            sign_up_div.removeAttribute("hidden", "hidden");
            enable_signup = !enable_signup;
            signUpBtn.disabled = true;
            signInBtn.disabled = false;
        }

        function enableDisableSignIn() {
            if (enable_signup == true) {
                sign_up_div.setAttribute("hidden", "hidden");
                enable_signup = !enable_signup;
                signInBtn.disabled = false;
                signUpBtn.disabled = true;
            }
            sign_in_div.removeAttribute("hidden", "hidden");
            enable_signin = !enable_signin;
            signInBtn.disabled = true;
            signUpBtn.disabled = false;
        }
    </script>

</body>

</html>