<template>
  <q-footer class="player-area" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <div class="row card-content">
          <div class="image-container">
            <q-img class="image" src="src/assets/logo_duck.svg" width="70px" />
          </div>
          <div class="playlist-name">
            <div>music</div>
            <div class="author-name">author</div>
          </div>
          <div id="div-play">
            <button id="btn-play" class="play"></button>
          </div>
          <button id="btn-next"></button>
          <button id="btn-return"></button>

          <q-form @submit="onSubmit" id="vol" class="volume">
            <q-knob
              name="volume"
              class="text-white q-ma-md"
              v-model="volume"
              size="90px"
              :thickness="0.2"
              color="orange"
              center-color="grey-8"
              track-color="transparent"
              show-value
            >
              <q-icon name="volume_up" />
            </q-knob>

            <div>
              <q-btn id="ok" label="Ok" type="submit" color="primary" />
            </div>


          </q-form>

          <div id="time"></div>
          <q-linear-progress
              id="bar"
              dark
              color="warning"
              size="10px"
              :value="progress"
            />
          <div id="duration"></div>

        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script>
import { ref } from "vue";
var index = 0;
var playlist = ["../src/assets/teste.mp3", "../src/assets/teste2.mp3"];
var sound = new Howl({
  src: [playlist[index]],
});

export default {
  name: "GPlayer",
  data () {
    return {
      progress: 0,
      buffer: 0
    }
  },
  mounted() {
    const play = document.getElementById("btn-play");
    const next = document.getElementById("btn-next");
    const back = document.getElementById("btn-return");

    //Inicializa as músicas
    play.onclick = () => {
      if (sound.playing()) {
        sound.pause();
        play.classList.remove("pause");
        play.classList.add("play");
      } else {
        sound.play();
        play.classList.remove("play");
        play.classList.add("pause");
      }
    };

    //Avança para a próxima música
    next.onclick = () => {
      if (index >= playlist.length - 1) {
        index = 0;
        sound.stop();
        sound = new Howl({
          src: [playlist[index]],
        });
        sound.play();
        play.classList.remove("play");
        play.classList.add("pause");
      } else {
        index += 1;
        sound.stop();
        sound = new Howl({
          src: [playlist[index]],
        });
        sound.play();
        play.classList.remove("play");
        play.classList.add("pause");
      }
    };

    //Retornar para a música anterior
    back.onclick = () => {
      if (index <= 0) {
        index = playlist.length - 1;
        sound.stop();
        sound = new Howl({
          src: [playlist[index]],
        });
        sound.play();
        play.classList.remove("play");
        play.classList.add("pause");
      } else {
        sound.stop();
        index = index - 1;
        sound = new Howl({
          src: [playlist[index]],
        });
        sound.play();
        play.classList.remove("play");
        play.classList.add("pause");
      }
    };

    //Converte tempo em minutos e segundos
    function convertTime(time) {
      let hours = Math.floor(time /3600)
      let mins = Math.floor(time/60) - (hours * 60)
      let secs = Math.floor(time % 60)
      let output = mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0')
      return output
    }

    //Atualiza os contadores das músicas
    var updateTime = window.setInterval(function(){
      document.getElementById('time').innerHTML = convertTime(sound.seek())
      document.getElementById('duration').innerHTML = convertTime(sound._duration)
    }, 500);

    //Atualiza a barra de progresso
    this.interval = setInterval(() => {
      if (this.progress >= 1) {
        this.progress = 0
        this.buffer = 0
        return
      }

      this.progress = (sound.seek() / sound._duration)
    })

    this.bufferInterval = setInterval(() => {
      if (this.buffer < 1) {
        this.buffer = (sound.seek() / sound._duration)
      }
    })

  },

  beforeUnmount () {
    clearInterval(this.interval)
    clearInterval(this.bufferInterval)
  },

  setup() {
    const submitResult = ref([]);

    return {
      volume: ref(60),
      submitResult,

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          sound.volume(value * 0.001);
          data.push({
            name,
            value,
          });
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.player-area {
  background: #1e1e1e;
  border-top: 2px solid #737373;
  max-height: 90px;
  height: 90px;
}
.image-container {
  max-width: 70px;
  max-height: 70px;
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 8px;
  color: $dark-grey;
  overflow: hidden;
}

.playlist-name {
  font-size: 20px;
  margin: 10px 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author-name {
  font-size: 15px;
}

#btn-play {
  font-size: 3em;
  border: 3px solid #fdc200;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  left: 50%;
  margin: -38px 0 0 -25px;
}

.play {
  background: url("../assets/play.png") no-repeat center transparent;
}

.pause {
  background: url("../assets/pause.png") no-repeat center transparent;
}

.div-play {
  background: transparent;
}

.volume {
  display: flex;
}

#btn-return {
  font-size: 3em;
  border: 3px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 51.7%;

  margin: -35px 0 0 -25px;
  background: url('../assets/previous.png') no-repeat center transparent;
}

#btn-next {
  font-size: 3em;
  border: 3px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  left: 52.6%;
  margin: -35px 0 0 -25px;
  background: url('../assets/next.png') no-repeat center transparent;
}

#vol {
  font-size: 3em;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  left: 90%;
  margin: -70px 0 0 -25px;
}

#bar {
  font-size: 3em;
  width: 40%;
  cursor: pointer;

  position: absolute;
  top: 50%;
  left: 33%;
  margin: 25px 0 0 -25px;
}

#ok {
  width: 2px;
  height: 2px;
}

#time {
  position: absolute;
  top: 50%;
  right: 69%;
  margin: 15px 0 0 -100px;
}

#duration {
  position: absolute;
  top: 50%;
  right: 24.8%;
  margin: 15px 0 0 -100px;
}

</style>
