<template>
  <q-dialog>
    <q-card class="bg-secondary card">
      <q-form class="q-ma-lg" @submit="onSubmit">
        <p class="publicar-playlist">{{ $t("new_playlist") }}</p>
        <q-input
          rounded
          outlined
          v-model="playlist.name"
          class="input-area"
          :placeholder="$t('input_playlist_name')"
        />
        <q-file
          accept=".jpg, .png, image/*"
          color="primary"
          outlined
          rounded
          label-color="primary"
          v-model="playlist.image"
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
          v-model="playlist.description"
          class="input-area"
          :placeholder="$t('input_playlist_description')"
          type="textarea"
        />
        <div class="publicar-playlist">
          <q-btn
            class="send-button text-black"
            rounded
            no-caps
            color="primary"
            label="Continuar"
            type="submit"
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: "newPlaylist",
  data() {
    return {
      playlist: {
        name: null,
        description: null,
        image: null,
      },
    };
  },

  methods: {
    onSubmit() {
      if (this.playlist.image === null) {
        this.playlist.image = "src/assets/logo_duck.svg";
      }
      console.log("coloca o envio aqui", this.playlist);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
.publicar-playlist {
  text-align: center;
  margin: 15px 0;
  font-size: 25px;
}

.uploader-area {
  margin: 20px 0;
  width: 350px;
  font-size: 18px;
}

.input-area {
  margin: 20px 0;
  width: 350px;
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
  width: 100px;
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
