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
        <q-select
          rounded
          outlined
          multiple
          v-model="playlist.musics"
          :options="optionsName"
          label="Escolha as músicas"
          class="text-white q-mb-lg"
          behavior="menu"
          popup-content-style="  border-radius: 8px;
            margin-top: 4px !important;
            background-color: #4d4d4d;"
          style="width: 100%"
          hide-dropdown-icon
        />
        <div class="publicar-playlist">
          <q-btn
            class="send-button text-black"
            rounded
            no-caps
            color="primary"
            label="Continuar"
            type="submit"
            v-close-popup
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
        musics: null,
        image: null,
      },
      options: null,
      optionsName: [],
    };
  },
  beforeMount() {
    this.loadOptions();
  },
  methods: {
    loadOptions() {
      this.$axios
        .get(`${process.env.API}/musics`)
        .then((response) => {
          this.options = response.data;
          this.options.forEach((item) => {
            this.optionsName.push(item.name);
          });
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
    onSubmit() {
      if (this.playlist.image === null) {
        this.playlist.image = "src/assets/logo_duck.svg";
      }
      let formData = new FormData();
      formData.append("name", this.playlist.name);
      formData.append("musics", this.playlist.musics);
      formData.append("image", this.playlist.image);

      this.$axios
        .post(`${process.env.API}/CreatePlaylist`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });

      this.$q.notify({
        color: "green-4",
        textColor: "white",
        message: "Playlist criada",
      });
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
