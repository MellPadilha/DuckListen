<template>
  <q-dialog>
    <q-card class="bg-secondary card">
      <q-form class="q-ma-lg" @submit="onSubmit">
        <p class="title">{{ $t("new_publications") }}</p>
        <div class="inputs">
          <div class="select-type-area">Tipo de postagem:</div>
          <div class="row select-type-area">
            <q-btn
              class="q-mr-md btn-type"
              label="Música"
              @click="changeType('music')"
              outline
              rounded
              no-caps
            />
            <q-btn
              class="btn-type"
              label="Podcast"
              @click="changeType('podcast')"
              outline
              rounded
              no-caps
            />
          </div>
          <div v-if="typeSelected">
            <q-file
              color="primary"
              outlined
              rounded
              label-color="primary"
              v-model="music.uploadMusic"
              :label="musicType ? 'Selecione a música' : 'Selecione o podcast'"
              accept=".mp3"
              class="uploader-area"
            >
              <template v-slot:append>
                <q-icon
                  class="input-icon q-mr-md"
                  rounded
                  outlined
                  name="fa-solid fa-arrow-up-from-bracket"
                  color="primary"
                  size="20px"
                />
              </template>
            </q-file>
            <q-input
              rounded
              outlined
              v-model="music.name"
              class="input-area"
              :placeholder="
                musicType
                  ? 'Digite o nome da música'
                  : 'Digite o nome do podcast'
              "
            />

            <q-input
              rounded
              outlined
              v-model="music.authorName"
              class="input-area"
              :placeholder="$t('input_author_name')"
            />
            <div v-if="musicType" class="title">
              <q-btn
                class="send-button text-black"
                rounded
                no-caps
                color="primary"
                icon-right="fa-regular fa-paper-plane"
                label="Enviar"
                @click="onSubmit"
                v-close-popup
              />
            </div>
            <div v-if="!musicType" class="title">
              <q-btn
                class="send-button text-black"
                rounded
                no-caps
                color="primary"
                icon-right="fa-regular fa-paper-plane"
                label="Enviar"
                v-close-popup
                @click="onSubmitPodcast"
              />
            </div>
          </div>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  name: "UploadMusica",
  data() {
    return {
      playList: null,
      open: true,
      music: {
        uploadMusic: null,
        name: null,
        authorName: null,
      },
      $q: useQuasar(),
      podcastType: false,
      musicType: false,
      typeSelected: false,
    };
  },
  methods: {
    onSubmit() {
      let formData = new FormData();
      formData.append("name", this.music.name);
      formData.append("author", this.music.authorName);
      formData.append("audio", this.music.uploadMusic);

      this.$axios
        .post(`${process.env.API}/UploadMusics`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });

      this.$q.notify({
        color: "green-4",
        textColor: "white",
        message: "Publicação feita com sucesso",
      });
    },
    onSubmitPodcast() {
      let formData = new FormData();
      formData.append("name", this.music.name);
      formData.append("author", this.music.authorName);
      formData.append("audio", this.music.uploadMusic);

      this.$axios
        .post(`${process.env.API}/UploadPodcast`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });

      this.$q.notify({
        color: "green-4",
        textColor: "white",
        message: "Publicação feita com sucesso",
      });
    },
    changeType(value) {
      if (value === "music") {
        this.podcastType = false;
        this.musicType = true;
      } else {
        this.musicType = false;
        this.podcastType = true;
      }
      this.typeSelected = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
.title {
  text-align: center;
  margin: 15px 0;
  font-size: 25px;
}

.select-type-area {
  font-size: 18px;
  color: $primary;
  margin: 15px 5px;
}

.btn-type {
  width: 100px;
  font-size: 19px;
}

.uploader-area {
  margin: 20px 0;
  width: 500px;
  font-size: 18px;
}

.input-area {
  margin: 20px 0;
  width: 500px;
}

:deep(.q-field__native) {
  color: $primary;
  font-size: 18px;
  margin-left: 10px;
}

:deep(.q-field__label) {
  color: $primary;
  font-size: 18px;
  margin-left: 10px;
}

.send-button {
  font-size: 20px;
  width: 150px;
}

:deep(.q-field__control:before) {
  border: $primary 0.2px solid;
}

:deep(.q-field__control:after) {
  border: $primary 0.2px solid;
}

:deep(.q-btn .q-icon) {
  font-size: 20px;
}
</style>
