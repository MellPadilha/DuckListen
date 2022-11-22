<template>
  <q-dialog>
    <q-card class="bg-secondary card">
      <q-form class="q-ma-lg" @submit="onSubmit">
        <p class="title">{{ $t("new_publications") }}</p>
        <div class="inputs">
          <q-file
            color="primary"
            outlined
            rounded
            label-color="primary"
            v-model="music.uploadMusic"
            label="Selecione a música"
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
          <q-file
            accept=".jpg, .png, image/*"
            color="primary"
            outlined
            rounded
            label-color="primary"
            v-model="music.uploadImage"
            label="Selecione a capa"
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
            :placeholder="$t('input_music_name')"
          />

          <q-input
            rounded
            outlined
            v-model="music.authorName"
            class="input-area"
            :placeholder="$t('input_author_name')"
          />
        </div>
        <div class="title">
          <q-btn
            class="send-button text-black"
            rounded
            no-caps
            color="primary"
            icon-right="fa-regular fa-paper-plane"
            label="Enviar"
            type="submit"
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: "UploadMusica",
  data() {
    return {
      playList: null,
      open: true,
      music: {
        uploadImage: null,
        uploadMusic: null,
        name: null,
        authorName: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("coloca o envio aqui", this.music);
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
