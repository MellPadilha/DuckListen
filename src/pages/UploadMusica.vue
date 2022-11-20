<template>
  <div>
    <h3 class="publicar-musicas">Publicar Musicas</h3>
    <div>
      <div class="inputs">
        <q-input
          readonly
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Selecione a sua música...')"
        >
          <q-file rounded outlined v-model="model" class="qFile">
            <template v-slot:prepend>
              <q-icon
                class="input-icon"
                rounded
                outlined
                name="cloud_upload"
                label="selecione"
              />
              <h5 class="textoSelecione">Selecione...</h5>
            </template>
          </q-file>
        </q-input>

        <q-input
          readonly
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Selecione a capa da sua música...')"
        >
          <q-file rounded outlined v-model="model" class="qFile">
            <template v-slot:prepend>
              <q-icon
                class="input-icon"
                rounded
                outlined
                name="cloud_upload"
                label="selecione"
              />
              <h5 class="textoSelecione">Selecione...</h5>
            </template>
          </q-file>
        </q-input>

        <q-input
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Qual o nome da sua música?')"
        >
        </q-input>

        <q-input
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Qual o seu nome artístico')"
        >
        </q-input>
        <label class="labelInput"></label>
        <q-input
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Deseja vincular a um álbum?')"
        >
          <div>
            <q-btn
              class="album"
              icon="keyboard_arrow_down"
              rounded
              outline
              no-caps
            />
          </div>
        </q-input>

        <q-input
          rounded
          outlined
          v-model="search"
          class="search-bar"
          :placeholder="$t('Deseja adicionar uma descrição?')"
        >
        </q-input>
      </div>
      <div class="publicar-musicas enviarCorpo">
        <q-btn
          class="enviar"
          rounded
          outline
          no-caps
          icon-right="send"
          label="Enviar "
        />
      </div>
    </div>
  </div>
</template>
<script>
import PlayerMenu from "../components/PlayerMenu.vue";
export default {
  name: "UploadMusica",
  data() {
    return {
      playList: null,
    };
  },
  beforeMount() {
    this.loadLists();
  },
  methods: {
    loadLists() {},
  },
};
</script>
<style lang="scss" scoped>
.publicar-musicas {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.player {
  margin-top: 5%;
  justify-content: center;
  align-items: center;
}
.album {
  margin-top: 10px;
}

.textoSelecione {
  color: aliceblue;
  margin-left: 10%;
}

.qFile {
  margin-right: -10px;
}

.input {
  background-color: antiquewhite;
}
.search-icon {
  color: #ffff;
}

.inputs {
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
}
.input-icon {
  color: #fdc200ff;
  font-size: 35px;
}

.search-bar {
  margin-top: 2%;
}

:deep(.q-field__native) {
  color: #afadad;
  align-items: center;
  height: 40px !important;
  font-size: 28px;
}

.enviar {
  font-size: 25px;
  width: 20%;
  border: #fdc200 0.2px solid;
  transition: none;
}

.enviarCorpo {
  margin-top: 20px;
}

:deep(.q-field__control:before) {
  border: #fdc200 0.2px solid;
  transition: none;
}
</style>
