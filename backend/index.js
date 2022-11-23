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
let busboy = require("busboy");

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
    endpoint - musics
*/

app.get("/musics", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let musics = [];
  db.collection("musics")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        musics.push(doc.data());
      });
      response.send(musics);
    });
});

app.post("/UploadMusics", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  const bb = busboy({ headers: request.headers });
  let fields = {};

  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    file
      .on("data", (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });
  bb.on("field", (name, val, info) => {
    console.log(`Field [${name}]: value: %j`, val);
    fields[name] = val;
  });
  bb.on("close", () => {
    console.log("fields:", fields);
    db.collection("musics").doc(fields.name).set({
      name: fields.name,
      author: fields.author,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ducklisten-afe0e.appspot.com/o/images%2Flogo_b.png?alt=media&token=f2cc2a64-8aa6-48fd-8457-b682e57fbf72",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/ducklisten-afe0e.appspot.com/o/audios%2Fteste.mp3?alt=media&token=6bd9f213-6336-40fe-9813-b4582db95c20",
    });

    response.send("Upload done");
  });
  request.pipe(bb);
});

/*
    listen
*/

app.listen(process.env.PORT || 3000);
