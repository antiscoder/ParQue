# ParQue

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Developers](#developers)
- [Installation and Setup](#installation-and-setup)
- [Technologies](#technologies)
- [Functions](#functions)

## Introduction <a name="introduction"></a>

ParQue is a mobile parking app that allows drivers to join a virtual queue, minimizing wait times for parking spots.
The app assigns drivers a spot without hassle or headache. Our app would revolutionize parking in this high-density area and make finding parking exponentially easier.


This application is built using react, javasripts and sql.js and would allow users to avoid roaming around parking lots for hours looking for a spot to park at.


**Key Features** <a name="key-features"></a> 
- **User-Friendly Interface**: A strightforward and intuitive interface that 
makes navigating selecting parking spots and garages hassle free
- **Account Creation**: Users are able to create accounts and sign into them allowing them to 
access all the features of the app
- **Join and Leave a Virtual Parkign Queue**: Users are able to join an parking queue that dynamically updates as users are
are dequeued once they park or manually leave the queue
- **Display Est Wait Time and Queue Position**: Once a user joins a queue for a spacific garage, they will be displayed a estimated
wait time until they will be able to park and their current position in the queue
- **Select a Parking Spot**: Once a user enters a parking structures they are displayed a parking guide showing empty and
occupied parking spots. The user is then able to select a spot to park at
- **Set Parking Time**: Users set how long they will be staying in a parking spot and are displayed the remaining time
before their parking time expires

**Developers**  <a name="developers"></a>
- Karel Fernandex (@karelfernandez)
- Anthony Nguyen (@antiscoder)

## Installation and Setup  <a name="installation-and-setup"></a>
 <details>
    <summary> Install Node.js </summary>
    &ensp; &ensp;&ensp; > Got to nodejs.org <br>
    &ensp; &ensp;&ensp; > Install desired verion based on operating system <br>
    &ensp; &ensp;&ensp; > Run and complete setup process through nodejs installer
 </details>

  <details>
    <summary> Clone the repository </summary>
    &ensp; &ensp;&ensp; > Create a directory that you want to clone the repository into <br>
    &ensp; &ensp;&ensp; > Inside the directory run > git clone https://github.com/antiscoder/133.git
 </details>

<details>
    <summary> Install required packages </summary>
    &ensp; &ensp;&ensp; > Open directory of cloned repository <br>
    &ensp; &ensp;&ensp; > Move into app file of directory (run cd app) <br>
    &ensp; &ensp;&ensp; > Run npm install to install required packages<br>
    &ensp; &ensp;&ensp; > Append the following lines to the package.json in the sql.js folder <br>
    &ensp; &ensp;&ensp; > "browser": { <br>
    &ensp; &ensp;&ensp;  "fs": false, <br>
    &ensp; &ensp;&ensp;   "path": false, <br>
    &ensp; &ensp;&ensp;   "os": false <br>
    &ensp; &ensp;&ensp;   } <br>
    <details>
    <summary> Picture Example </summary>
      &ensp; &ensp;&ensp; <img width="450" alt="bugfix" src="https://github.com/antiscoder/133/assets/118551816/f99baaee-754b-4258-9652-d28c85f165b0">
    </details>

  
 </details>

 <details>
    <summary> Using the application </summary>
    &ensp; &ensp;&ensp; > Run the application using > npm start <br>
    &ensp; &ensp;&ensp; > Stop the application with CTRL + C
 </details>

## Technologies <a name="technologies"></a>
The following is a list of technologies used to create this application
<details>
<summary> List of Technologies Used </summary>
<ul>
<li>JavaScript</li>
<li>Node.js</li>
<li>React js</li>
<li>Sql.js</li>
</ul>

</details>

## Functions <a name="functions"></a>

<details>
<summary>Account Management</summary>
This section covers the various actions related to managing user 
accounts. 
Here are the instructions for each:

### Registration
- To register for an account, on the login page on startup click the “Click Here” 
button
- Enter an email address, name, id_number, phone number and password to complete registration
    <details>
    <summary> Show example </summary>
    <img width="450" alt="Screen Shot 2023-05-11 at 9 23 06 PM" src="https://github.com/antiscoder/133/assets/118551816/485a0183-cc64-40e0-80d6-0856f8912862">
    <img width="450" alt="registration" src="https://github.com/antiscoder/133/assets/118551816/5d9943cb-1ceb-4eed-a5f8-b85e7b0b4d9a">
    </details>

### Logging In
- Once you have a registered account, use the login feature to access 
other functionalities.
- Enter your registered email and password to log in
    <details>
    <summary> Show example </summary>
    <img width="450" alt="Screen Shot 2023-05-11 at 9 23 06 PM" src="https://github.com/antiscoder/133/assets/118551816/eb77c691-9a37-4aa5-b676-c6ec41806b7e">
    <img width="450" alt="login" src="https://github.com/antiscoder/133/assets/118551816/4658061f-0467-419f-aacb-b86641f81202">


    </details>

### Logging Out 
- To log out, locate the "Log-out" button on the account infromation page and click 
on it
- Logging out will terminate your current session
    <details>
    <summary> Show example </summary>
    <img width="450" alt="Screen Shot 2023-12-11 at 9 24 43 PM" src="https://github.com/antiscoder/133/assets/118551816/fa6707a1-9f76-4fb6-97c2-69092a79580f">
    <img width="450" alt="Screen Shot 2023-05-11 at 9 24 43 PM" src="https://github.com/antiscoder/133/assets/118551816/03040775-9061-47e1-adf5-bde7e9fb9e31">
    </details>
    

<details>
<summary> Parking Management </summary>
This section provides instructions for entering a queue, picking a parking spot and selecting a desired parking time within the 
application. Here are the instructions for each action:

### Joining Queue
- Locate and click on join queue button on homepage
- Select a desired parking garage to park at
- Will then be brought to a timer page indicating estimated wait time and current queue position
    <details>
    <summary> Show example </summary>
      <img width="450" alt="Screen Shot 2023-05-11 at 9 26 13 PM" src="https://github.com/antiscoder/133/assets/118551816/fa6707a1-9f76-4fb6-97c2-69092a79580f">
      <img width="450" alt="Screen Shot 2023-05-11 at 9 262 13 PM" src="https://github.com/antiscoder/133/assets/118551816/a3af96b5-4566-4434-ac88-a4d8c0ce58b5">
      <img width="450" alt="Screen Shot 2023-05-11 at 9 263 13 PM" src="https://github.com/antiscoder/133/assets/118551816/4db3f5f0-d0fe-447c-af96-76402a5b0e32">
    </details>

### Selecting Parking Spot
- Once timer remaining time equals 00:00 and queue position is 1
- Leave queue button will be replaced with ready to park button
- Click on ready to park
- User will be brought to parking guide page for that garage
- Select a single empty parking spot (green) to park at
- Click I have parked button
    <details>
    <summary> Show example </summary>
      <img width="363" alt="Screen Shot 2023-05-11 at 9 26 42 PM" src="https://github.com/antiscoder/133/assets/118551816/85edf799-8a99-4ef6-ad9b-f8011d6500af">
      <img width="363" alt="Screen Shot 2023-05-131 at 9 26 42 PM" src="https://github.com/antiscoder/133/assets/118551816/ae527453-cd90-4f67-8011-1611b1ed6e12">
      <img width="363" alt="Screen Shot 2023-05-1331 at 9 26 42 PM" src="https://github.com/antiscoder/133/assets/118551816/6e82156b-3d1e-4ad9-9a4a-ad7046bc4931">
    </details>



### Set Parking Duration
- After clicking "i have parked" button user is brought to parking duration page
- Select desired hour and minute duration user will stay at that spot for
- Click set duration to comfirm time
- User is brought to page showing timer counting down remaining time
    <details>
    <summary> Show example </summary>
      <img width="332" alt="Screen Shot 2023-05-11 at 9 31 16 PM" src="https://github.com/antiscoder/133/assets/118551816/0a4cc861-258d-494a-8fc0-89e6ee678f14">
      <img width="332" alt="Screen Shot 2023-05-311 at 9 31 16 PM" src="https://github.com/antiscoder/133/assets/118551816/aa6ee976-eb57-445a-b5dc-200125548c01">
      <img width="332" alt="Screen Shot 2023-05-3131 at 9 31 16 PM" src="https://github.com/antiscoder/133/assets/118551816/a00638c9-7a4c-49f8-8fbd-311aa4e70fcb">
    </details>
</details>
