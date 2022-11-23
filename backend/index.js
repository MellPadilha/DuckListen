/*
  configurar heroku, nodemon e firebase

  heroku builds:create -a ducklisten-backend
 	https://ducklisten-backend.herokuapp.com/

  https://nodemon.io/

 https://firebase.google.com/docs/firestore/quickstart#node.js
  npm install firebase --admin --save
*/

/*
    dependencies
*/

const express = require("express");
const admin = require("firebase-admin"); // onde tá esse firebase-admin????????

// APAGAR ANTES DE ENVIAR
// link para a versão atual do firebase (fiz o que está no vídeo). usar se não rodar código abaixo
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

/*
    config- express
*/

const app = express();

/*
    config- firebase
*/

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

/*
    endpoint - posts
*/

app.get("/posts", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let posts = [];
  db.collection("posts")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      response.send(posts);
    });
});

/*
    listen
*/

app.listen(process.env.PORT || 3000);
