# Connecting-Together
This project aims at providing a platform to students to commuicate and have a discussion with their teachers in this pandemic time where they don't have the acces to physical interaction.

- Project Link:

- Demo Video Link:

## Tech Stack Used
 
### Language
Javascript
### Client-Side
React.js
Stream Chat API
### Server-Side
Node.js

Express.js

Multer

## Features
### Primary Features
- Create a new channel

Channels are created by teachers or admin and members are added. The members added to the channels by the creator will have the access for discussion.
<img width="952" alt="1" src="https://user-images.githubusercontent.com/58679154/143720523-5b0460a2-6827-449b-a890-a1d9e4339074.png">


- Classwise Distribution of Channels:

This application brings in the feature of creation of different channels classwise and subjectwise where a desired group discussion can happen.

- Messaging Features

We can add emojis, reactions, threads to messages in group chat and direct messages
<img width="956" alt="2" src="https://user-images.githubusercontent.com/58679154/143736916-baeb3f0f-3b64-40f6-99af-5ad3c768ad07.png">

- Direct Messages

Messages can be sent privately to any individual by clicking on Direct Messages tab and selecting the user to whom we want to send the message.
<img width="956" alt="7" src="https://user-images.githubusercontent.com/58679154/143764158-fa3aeaaf-5409-4936-b7d1-349834d5af6b.png">

- Sending Attachments

Attachments including multimedia files, PDFs, images and many more can be sent in any conversation.
<img width="956" alt="4" src="https://user-images.githubusercontent.com/58679154/143764104-9b9cee77-494e-49e1-9650-5bbe925b219f.png">

- Knowing read receipts of a message

It provides the feature to make the sender aware about who all have read the messages in case of group chat.
<img width="955" alt="77" src="https://user-images.githubusercontent.com/58679154/143764360-3078a9e9-d549-4110-aa06-2fb6cf8038a1.png">


### Secondary Features
 - SignUp/SignIn Form

At the beginning of the application, a signup form is displayed where every user in any institute has to fill his/her credentials including Full Name, UserName, Password, Image URL, category whether student or teacher and Phone Number. If a user already has the account, he will be prompted to signin.
<img width="956" alt="8" src="https://user-images.githubusercontent.com/58679154/143764178-4b9398e2-f6fd-4114-bd0c-b624f74fcf2e.png">


- Message Notifications

In case any user of the application is offline, a message notification will be sent on the registered mobile number filled during SignUp process. This feature is available for both group messages and direct messages.

- Stream-Chat Account

Adding users to the Online Forum application can be also done by the school admin by logging in to Stream-Chat account. Additionally he/she can also create channels and add users to it. 
<img width="939" alt="2021-11-28 (4)" src="https://user-images.githubusercontent.com/58679154/143764218-3b800fc7-985f-4581-9af2-eef85bd7259e.png">


- Uploading and Downloading of class Assignments, Attendance and Recordings

If any teacher login, then by clicking on the i button near the channel name he/she can upload the class assignments, attendance and recordings which will be saved to the Google Firebase in a folder whose name is same as that of channel name. 
If any student login, then by clicking on the i button, he/she can download all the materials provided by the teacher.
<img width="956" alt="2021-11-28 (5)" src="https://user-images.githubusercontent.com/58679154/143764222-2b894bbc-6ea3-48b0-81d8-e0138b79857e.png">

## Agile Methodology
I divided my tasks into smaller sub-tasks. I had to manage my time efficiently within this three weeks time to complete all the subtasks and bring out the results. I proceeded on the following manner:
- At first I created the SignIn/SignUp page of Online Forum for users of any institute.
- Then, I explored the various features provided by Stream-Chat Application to integrate them in a systematic manner into my discussion forum.
- After that I proceeded with adding the functionality to create different channels and adding users to the channels.
- Then I implemented the logic of direct messaging with any of the users of the application.
- In case of huge number of channels and users, it requires that a search option can quickly provide the channel or the user to whom we want to send messages. So implemented the search field with autocomplete feature.
- By using Stream-Chat API, provided the feature of adding emojis, reactions and thread to any of the messages.
- In case of any query by the student, if multimedia files are required to be attached in the discussion, an option is also provided for that.
- It is an essential need that any user should be notified of the messages in case he/she is offline, therefore my next task was to implement this using Twilio.
- Last but not the least, to enhance interaction between students and teachers, the discussion forum also has the capability to upload and download assignments, recordings and attendance. 
- Still there's so much to be worked upon and perhaps this journey won't end. After the completion of Microsoft Engage program, I would like to add the functionality of video calling for group as well as individual in case any doubt sessions are required.
