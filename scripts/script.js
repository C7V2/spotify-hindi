
new Vue({
  el: "#app",
  data() {
    return {
      
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      
      currentColorIndex: 0,
      tracks: [
        {
          name: "Afsanay",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/226/Afsanay-Hindi-2021-20220503024034-500x500.jpg",
          source: "https://aac.saavncdn.com/226/04613b442992efc18400f76e70f55a7c_160.mp4",
          url: "https://open.spotify.com/track/05sqcYfU2wMlKwPVJ0rotq?si=4e850a474fff493d",
          favorited: false,
          colors: { background: "#293B51", player: "#1D1C21" }
        },
        {
          name: "Gumaan",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/183/Gumaan-Hindi-2020-20220503034222-500x500.jpg",
          source: "https://aac.saavncdn.com/183/ba8e13460b5c23ea4fe05c128a7514ce_160.mp4",
          url: "https://open.spotify.com/track/6cdiviyVL3tFYE1eDcmUzL?si=47e0178bb6aa4fd2",
          favorited: false,
          colors: { background: "#8A96AE", player: "#555662" }
        },
        {
          name: "Departure Lane",
          artist: "Talha Anjum, Umair ft. Udit Narayan, Alka Yagnik",
          cover: "https://c.saavncdn.com/156/My-Terrible-Mind-Hindi-2024-20241120081544-500x500.jpg",
          source: "https://aac.saavncdn.com/156/8fa8cf27a1b9faa7460ba284b57f2c94_160.mp4",
          url: "https://open.spotify.com/track/7wGgYAOMhhRObOGdWlJ9Hi?si=c369c5f3ff5446c9",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#24292e" }
        },
        {
          name: "BTDT (Been There Done That)",
          artist: "Bilal Saeed, Talha Anjum",
          cover: "https://c.saavncdn.com/699/BTDT-Been-There-Done-That-Punjabi-2024-20241015092333-500x500.jpg",
          source: "https://aac.saavncdn.com/699/33a354430e187efa9b2fd50b1369f30d_160.mp4",
          url: "https://open.spotify.com/track/2jJHEFJG33RYeVhCZEbZ8u?si=495a0a789e684eb5",
          favorited: false,
          colors: { background: "#750943", player: "#551948" }
        },
        {
          name: "Downers At Dusk",
          artist: "Talha Anjum",
          cover: "https://c.saavncdn.com/866/Open-Letter-English-2023-20230211190809-500x500.jpg",
          source: "https://aac.saavncdn.com/866/c7d4741f0f3bffe30f5a4aad4d6b072e_160.mp4",
          url: "https://open.spotify.com/track/5yqr66QIdRvhh5cxjgpkJh?si=11abbe72578e4df2",
          favorited: false,
          colors: { background: "#241A10", player: "#060606" }
        },
        {
          name: "Me & You",
          artist: "Jokhay, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/202/Therapy-Urdu-2023-20240909161809-500x500.jpg",
          source: "https://aac.saavncdn.com/202/82ebe247f2f588a4683602cd425d4899_160.mp4",
          url: "https://open.spotify.com/track/7w2vvvow2gxPiz7xghMMOh?si=1eef0ca3111641da",
          favorited: false,
          colors: { background: "#51716B", player: "#2a3c38" }
        },
        {
          name: "Now & Then",
          artist: "Jokhay, Talha Anjum",
          cover: "https://c.saavncdn.com/929/Now-Then-English-2025-20250111165117-500x500.jpg",
          source: "https://aac.saavncdn.com/929/c81ecc195e4b741321c9406ce3d4179c_160.mp4",
          url: "https://open.spotify.com/track/6jLmfvFWtsfkYPz4iNjXeK?si=9ed9cd45aaca467e",
          favorited: false,
          colors: { background: "#6E3C21", player: "#2E1D15" }
        },
        {
          name: "Heartbreak Kid",
          artist: "Talha Anjum, Umair",
          cover: "https://c.saavncdn.com/156/My-Terrible-Mind-Hindi-2024-20241120081544-500x500.jpg",
          source: "https://aac.saavncdn.com/156/d5e940302defdb31b01f3229f2cbccd0_160.mp4",
          url: "https://open.spotify.com/track/1ktAfHym69UrvWIgx2qPPm?si=68892da3cb63480a",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#24292e" }
        },
        {
          name: "Yaad",
          artist: "Asim Azhar, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/294/Yaad-Urdu-2021-20210324134418-500x500.jpg",
          source: "https://aac.saavncdn.com/294/7f9a1ef158fb02e22d7b06c7ad051ddf_160.mp4",
          url: "https://open.spotify.com/track/7jdHemolm8HmaireObpqXt?si=c8c2e558bc9145c5",
          favorited: false,
          colors: { background: "#633B13", player: "#37181D" }
        },
        {
          name: "Dont Mind (feat. Rap Demon)",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/455/Dont-Mind-feat-Rap-Demon-Hindi-2020-20220503024028-500x500.jpg",
          source: "https://aac.saavncdn.com/455/b2f073e2120c24f4fba3141fb221b8b3_160.mp4",
          url: "https://open.spotify.com/track/4Tol72m7hzEseRnsDc3SWw?si=d79feac0d6a64f98",
          favorited: false,
          colors: { background: "#061833", player: "#000000" }
        },
        {
          name: "Bikhra",
          artist: "Abdul Hannan & Rovalio",
          cover: "https://c.saavncdn.com/297/Bikhra-Hindi-2022-20220209231357-500x500.jpg",
          source: "https://aac.saavncdn.com/297/e3ba03fe076e99c86176acfb1dbe6e52_160.mp4",
          url: "https://open.spotify.com/track/0OdztoASgKBBNcAgtErk0X?si=2845675154314c59",
          favorited: false,
          colors: { background: "#7A2A5B", player: "#360328" }
        },
        {
          name: "Channa Ve",
          artist: "Rahul Sathu, Talha Anjum",
          cover: "https://c.saavncdn.com/137/Channa-Ve-Hindi-2024-20240904130626-500x500.jpg",
          source: "https://aac.saavncdn.com/137/02e29efcbfaa3dc902437824bc561971_160.mp4",
          url: "https://open.spotify.com/track/4ekflmlEIqeYEgZYx2p4xy?si=f414fa3b92434d0e",
          favorited: false,
          colors: { background: "#15517D", player: "#0E141E" }
        },
        {
          name: "COME THROUGH",
          artist: "Umair ft. Abdullah Maharvi, Talha Anjum",
          cover: "https://c.saavncdn.com/032/ROCKSTAR-WITHOUT-A-GUITAR-Urdu-2024-20240521125345-500x500.jpg",
          source: "https://aac.saavncdn.com/032/6d89d49deb568f5042510ab35b2a04e8_160.mp4",
          url: "https://open.spotify.com/track/4yNtO1F3flXZ4v3Ry1MzuP?si=31b1d2b15b7744e5",
          favorited: false,
          colors: { background: "#172B29", player: "#0F1918" }
        },
        {
          name: "Happy Hour",
          artist: "Talha Anjum",
          cover: "https://c.saavncdn.com/866/Open-Letter-English-2023-20230211190809-500x500.jpg",
          source: "https://aac.saavncdn.com/866/0c410475bcafbd4d6fce6acee3b36bc8_160.mp4",
          url: "https://open.spotify.com/track/3QbdShNwcXqKIk1xvGp8P8?si=6dac0192ea2340b3",
          favorited: false,
          colors: { background: "#241A10", player: "#060606" }
        },
        {
          name: "Why",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/506/Why-Hindi-2022-20220503024022-500x500.jpg",
          source: "https://aac.saavncdn.com/506/0fa7017859daada3be40edd3722ccee1_160.mp4",
          url: "https://open.spotify.com/track/6712goAF36pcQ2k51UwbIe?si=a7cb0e7c4ee841f1",
          favorited: false,
          colors: { background: "#54315B", player: "#422139" }
        },
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.changeColors();  // Update colors only for the current track
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.changeColors();  // Update colors for the last track
      }
      
      this.resetPlayer();
    },
    
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.changeColors();  // Update colors only for the current track
      } else {
        this.currentTrackIndex = 0;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.changeColors();  // Update colors for the first track
      }
      
      this.resetPlayer();
    },
    
    changeColors() {
      // Get the current track's color options
      const currentTrackColors = this.currentTrack.colors;
    
      // Apply the background and player colors for the current track
      document.body.style.backgroundColor = currentTrackColors.background;
      document.querySelector('.player').style.backgroundColor = currentTrackColors.player;
    },

    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    
  }
});
