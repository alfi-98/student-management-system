# Basic-HTML-Login-Form
This is a walkthrough of building a Login Form using HTML and CSS.  

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

## 4. Using CSS to style the login page:
- Create a new ```style.css``` file inside the project folder.
- Now to link the html file with the CSS file, we need to add the below ```<link/>``` tag inside the heading tag of the index.html file.
```
 <head>  
   <link rel="stylesheet" href="style.css"/>  
</head>  
```
- The first style we will do using ```css``` is to define a background color and some other attributes by writing this below code inside the style.css file:
```
body  
{  
    margin: 0;  
    padding: 0;  
    background-color: rgba(245, 242, 235);  
    font-family: 'Arial';  
}  
```
- The  ```<div>``` and ```<form>``` element inside ```body``` is specified with ```class``` and  ```id``` attribute with the value "login". These attributes helps the ```style.css``` file to style those specific elements in index.html file. 
```
 <div class="login">    
    <form id="login">      
    </form>     
</div>    
```
The css code for the above elements:
```
.login{  
    width: 300px;  
    overflow: hidden;  
    margin: auto;  
    padding: 80px;  
    background: #ffffff;  
    border-radius: 15px ;  
 }
```
- To bring our ```<h1>``` tag in the center and styling our fonts, the code below is used: </br>
```
h2{  
    text-align: center;  
    color: #1c1e1e;  
    padding: 20px;  
}  
label{  
    color: #1c1e1d;  
    font-size: 17px;  
}  
```
- Finally, We have used the following ```css``` code to modify the ```id``` attribute with the values "userName", "password" and "submit":
```
#userName{  
    width: 300px;  
    height: 30px;  
    padding-left: 8px; 
    border: none;  
    border-radius: 17px;  
    border-color: #dfdfdf;
    border-width: 1px; 
    border-style: solid;
    
}  
#password{  
    width: 300px;  
    height: 30px;  
    padding-left: 8px; 
    border: none;  
    border-radius: 17px;  
    border-color: #dfdfdf;
    border-width: 1px; 
    border-style: solid; 
}  
#submit{  
    width: 310px;  
    height: 30px;  
    border: none;  
    border-radius: 17px;   
    color: #1c1e1d;  
    background-color: rgba(245, 202, 143);
  
}  
```
 ## So in the end our Login Page will look like this:
<img width="1280" alt="Screenshot 2022-11-08 at 1 07 03 AM" src="https://user-images.githubusercontent.com/66726759/200393759-ed190fcc-c9f4-4f2b-9c88-0041962e70d8.png">
