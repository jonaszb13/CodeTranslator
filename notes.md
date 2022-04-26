testEmail is not valid123

testtest2.0account created

---------------------------------------

database connection

$DATABASE_HOST = '10.35.232.77';
$DATABASE_USER = 'k174849_test';
$DATABASE_PASS = 'Test1234.?';
$DATABASE_NAME = 'k174849_test';

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

tables - accounts; language

---------------------------------------

$_POST not working
email is not avalible in php file for validation process
other echo work just fine

$_POST and $_GET request have to be in the same file/webpage to work
<https://hosting166467.ae84c.netcup.net/resources/php/register.php?email=joe@example.com>
direct access to php file - "?" defines the input value "joe@example.com" for the upcomming variable "email" that is echoed on the webpage
