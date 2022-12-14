# Basic-Student-Management System
This is a walkthrough of building a basic Student Management System HTML, CSS and MySQL.  

## 1. IDE:
- For this project we are going to use ```VScode``` (Visual Studio) code editor

## 2. Project setup:
- Create a folder inside vscode and create a ```index.html``` file.
- To have a basic ```html``` structure type, ```! + Enter```
- Your file shoule look somthing like this:
<img width="1435" alt="Screenshot 2022-11-07 at 3 36 32 PM" src="https://user-images.githubusercontent.com/66726759/200276984-ce22cd15-c89a-4e21-a8f8-84d137cbf12c.png">


## 3. Building the Login Page using HTML:

👉 Login Page Heading 
- At first we give a heading to our login page using ```<h1>``` tag. </br>
```<h1> Login page </h1>``` 
- Next, to create a section in the html page we use the ```<div>``` tag which has a ```class``` attribute  with value ```"login"```.</br>
- Inside the div we include a ```<form></form>``` tag. </br>
```
<div class="login">    
    <form>    
         
    </form>     
</div>  
```
👉 Building the Form
- Then we use the ```<label>``` tag to label the input fields.
- ```<input>``` tag helps us to create input fields for the username and password. </br>
```
<h1>Login Page</h1><br>    
    <div class="login">    
    <form id="login">    
        <label><b>User Name     
        </b>    
        </label>    
        <input type="text" name="userName" id="userName" placeholder="Username">    
        <br><br>    
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="password" id="password" placeholder="Password">    
        <br><br>        
          
    </form>     
 ```
 - To submit the form, we use the input field of ```button``` type. </br>
 ```<input type="button" name="submit-btn" id="submit-btn" value="Submit">```
  
- The login page will look like this. 
<img width="1316" alt="Screenshot 2022-11-07 at 4 18 18 PM" src="https://user-images.githubusercontent.com/66726759/200285867-fcba391f-6235-46db-bf0c-5dcc517b1a51.png">

 ## So in the end our Login Page will look like this:
<img width="1157" alt="Screenshot 2022-11-13 at 9 30 42 PM" src="https://user-images.githubusercontent.com/66726759/201529959-bc1537bc-b83b-47a7-9c00-fb59ef39d394.png">

## 3. Building the UI of Web Pages:
👉 Home Page:
- At first, we build a navbar and a sidebar for our web pages. This wll be the basic structure for all our webpages. 
<img width="1418" alt="Screenshot 2022-11-15 at 2 33 44 PM" src="https://user-images.githubusercontent.com/66726759/201869686-3723de2b-9f11-4352-9afc-6f57e13e0197.png">

👉 MyClassroom Page:
- Teachers will be able to input, delete and update student data from their respective classes in this page. 

<img width="1118" alt="Screenshot 2022-11-15 at 2 34 30 PM" src="https://user-images.githubusercontent.com/66726759/201869850-d7369ce0-1341-4162-9195-d90995b38757.png">

👉 MyDashboard Page:

<img width="1118" alt="Screenshot 2022-11-15 at 2 35 17 PM" src="https://user-images.githubusercontent.com/66726759/201870026-d0925a60-0701-408d-9817-218227741768.png">

