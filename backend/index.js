/*
  criar npm

  configurar heroku, nodemon e firebase

  heroku
  https://devcenter.heroku.com/articles/heroku-cli

  heroku builds- listar e criar apps heroku
  cmd: heroku plugins:install heroku-builds

  heroku builds- comando para criar no local dir
  cmd: builds:create -a ducklisten-backend

  nodemon - reseta servidor toda vez qeu tem mudança no código
  https://nodemon.io/

  firebase
  https://firebase.google.com/docs/firestore/quickstart#node.js
  cmd: npm install firebase --admin --save

  testes na porta 3000- certificar que está na pasta backend para os testes
*/

/*
    dependencies
*/

const express = require("express");
const admin = require("firebase-admin"); // onde tá esse firebase-admin????????
let busboy = require("busboy");
let path = require("path");
let os = require("os");
let fs = require("fs");
let UUID = require("uuid-v4");

/*
    config- express
*/

const app = express();

/*
    config- firebase
*/
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ducklisten-afe0e.appspot.com",
});

const db = admin.firestore();
let bucket = getStorage().bucket();

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

app.get("/playlist", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let playlists = [];
  db.collection("playlist")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        playlists.push(doc.data());
      });
      response.send(playlists);
    });
});

app.get("/podcast", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let podcasts = [];
  db.collection("podcast")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        podcasts.push(doc.data());
      });
      response.send(podcasts);
    });
});

app.post("/UploadMusics", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let uuid = UUID;

  const bb = busboy({ headers: request.headers });
  let fields = {};
  let fileData = {};
  mimeType = "audio/mp3";

  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    let filepath = path.join(os.tmpdir(), filename);
    file.pipe(fs.createWriteStream(filepath));
    fileData = { filepath, mimeType };
    file
      .on("data", (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });
  bb.on("field", (name, val, info) => {
    fields[name] = val;
  });
  bb.on("close", () => {
    bucket.upload(
      fileData.filepath,
      {
        uploadType: "media",
        metadata: {
          metadata: {
            contentType: fileData.mimeType,
            firebaseStorageDownloadTokens: uuid,
          },
        },
      },
      (err, uploadedFile) => {
        if (!err) {
          createDocument(uploadedFile);
        }
      }
    );
    function createDocument(uploadedFile) {
      db.collection("musics")
        .doc(fields.name)
        .set({
          name: fields.name,
          author: fields.author,
          image: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o
          /images%2Flogo_b.png?alt=media&token=f2cc2a64-8aa6-48fd-8457-b682e57fbf72`,
          audio: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${uploadedFile.name}?alt=media&token=${uuid}`,
        })
        .then(() => {
          response.send("Upload done");
        });
    }
  });
  request.pipe(bb);
});

app.post("/UploadPodcast", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let uuid = UUID;

  const bb = busboy({ headers: request.headers });
  let fields = {};
  let fileData = {};
  mimeType = "audio/mp3";

  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    let filepath = path.join(os.tmpdir(), filename);
    file.pipe(fs.createWriteStream(filepath));
    fileData = { filepath, mimeType };
    file
      .on("data", (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });
  bb.on("field", (name, val, info) => {
    fields[name] = val;
  });
  bb.on("close", () => {
    bucket.upload(
      fileData.filepath,
      {
        uploadType: "media",
        metadata: {
          metadata: {
            contentType: fileData.mimeType,
            firebaseStorageDownloadTokens: uuid,
          },
        },
      },
      (err, uploadedFile) => {
        if (!err) {
          createDocument(uploadedFile);
        }
      }
    );
    function createDocument(uploadedFile) {
      db.collection("podcast")
        .doc(fields.name)
        .set({
          name: fields.name,
          author: fields.author,
          image: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o
          /images%2Flogo_b.png?alt=media&token=f2cc2a64-8aa6-48fd-8457-b682e57fbf72`,
          audio: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${uploadedFile.name}?alt=media&token=${uuid}`,
        })
        .then(() => {
          response.send("Upload done");
        });
    }
  });
  request.pipe(bb);
});

app.post("/CreatePlaylist", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let uuid = UUID;

  const bb = busboy({ headers: request.headers });
  let fields = {};
  let fileData = {};

  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    let filepath = path.join(os.tmpdir(), filename);
    file.pipe(fs.createWriteStream(filepath));
    fileData = { filepath, mimeType };
    file
      .on("data", (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });
  bb.on("field", (name, val, info) => {
    fields[name] = val;
  });
  bb.on("close", () => {
    bucket.upload(
      fileData.filepath,
      {
        uploadType: "media",
        metadata: {
          metadata: {
            contentType: fileData.mimeType,
            firebaseStorageDownloadTokens: uuid,
          },
        },
      },
      (err, uploadedFile) => {
        if (!err) {
          createDocument(uploadedFile);
        }
      }
    );
    function createDocument(uploadedFile) {
      db.collection("playlist")
        .doc(fields.name)
        .set({
          name: fields.name,
          musics: fields.musics,
          image: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${uploadedFile.name}?alt=media&token=${uuid}`,
        })
        .then(() => {
          response.send("Upload done");
        });
    }
  });
  request.pipe(bb);
});

app.post("/DeleteMusica", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let uuid = UUID;

  const bb = busboy({ headers: request.headers });

  db.collection("podcast")
    .doc(fields.name)
    .set({
      name: fields.name,
      musics: fields.musics,
      image: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${uploadedFile.name}?alt=media&token=${uuid}`,
    })
    .then(() => {
      response.send("Upload done");
    });
});

app.post("/DeletePodcast", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let uuid = UUID;

  const bb = busboy({ headers: request.headers });

  db.collection("musics")
    .doc(fields.name)
    .set({
      name: fields.name,
      musics: fields.musics,
      image: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${uploadedFile.name}?alt=media&token=${uuid}`,
    })
    .then(() => {
      response.send("Upload done");
    });
});

/*
    listen
*/

app.listen(process.env.PORT || 3000);
