
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
      colorOptions: [
        { background: "#2F4F4F", player: "#24292e" },
        { background: "#6A5ACD", player: "#483D8B" },
        { background: "#bde0fe", player: "#a2d2ff" },
        { background: "#FFFFFF", player: "#000000" },
        { background: "#758BFD", player: "#27187E" },
        { background: "#58A4B0", player: "#373F51" },
        { background: "#648DE5", player: "#304C89" },
        { background: "#FFA5AB", player: "#A53860" },
        { background: "#9F7833", player: "#413620" },
        { background: "#52528C", player: "#372554" },
        { background: "#faedcd", player: "#d4a373" },
        { background: "#f5ebe0", player: "#d6ccc2" },
        { background: "#dfe7ef", player: "#eef3f7" },
        { background: "#b2beb5", player: "#2f4f4f" },
        { background: "#1E441E", player: "#152614" },
        { background: "#335C81", player: "#274060" },
        { background: "#9FA0FF", player: "#7F87F0" },
        { background: "#86DEB7", player: "#63B995" },
        { background: "#5C5552", player: "#433633" },
        { background: "#526760", player: "#374B4A" },
        { background: "#D6FFF6", player: "#231651" },
        { background: "#5D5E60", player: "#5D5E60" },
        { background: "#C0FDFB", player: "#64B6AC" },
        { background: "#7E5A9B", player: "#63458A" },
        { background: "#8797AF", player: "#56667A" },
        { background: "#ABD2FA", player: "#3D518C" },
        { background: "#635380", player: "#49306B" },
        { background: "#49306B", player: "#462521" },
        { background: "#6096BA", player: "#274C77" },
        { background: "#368F8B", player: "#368F8B" },
        { background: "#A7BBEC", player: "#9097C0" },
        { background: "#85BDA6", player: "#3E885B" },
        { background: "#B79CED", player: "#957FEF" },
        { background: "#EAEAEA", player: "#C0D6DF" },
      ],
      currentColorIndex: 0,
      tracks: [
        {
          name: "Gumaan",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/183/Gumaan-Hindi-2020-20220503034222-500x500.jpg",
          source: "https://aac.saavncdn.com/183/ba8e13460b5c23ea4fe05c128a7514ce_160.mp4",
          url: "https://open.spotify.com/track/6cdiviyVL3tFYE1eDcmUzL?si=47e0178bb6aa4fd2",
          favorited: false
        },
        {
          name: "Departure Lane",
          artist: "Talha Anjum, Umair ft. Udit Narayan, Alka Yagnik",
          cover: "https://c.saavncdn.com/156/My-Terrible-Mind-Hindi-2024-20241120081544-500x500.jpg",
          source: "https://aac.saavncdn.com/156/8fa8cf27a1b9faa7460ba284b57f2c94_160.mp4",
          url: "https://open.spotify.com/track/7wGgYAOMhhRObOGdWlJ9Hi?si=c369c5f3ff5446c9",
          favorited: false
        },
        {
          name: "Afsanay",
          artist: "Young Stunners, Talha Anjum, Talhah Yunus",
          cover: "https://c.saavncdn.com/226/Afsanay-Hindi-2021-20220503024034-500x500.jpg",
          source: "https://aac.saavncdn.com/226/04613b442992efc18400f76e70f55a7c_160.mp4",
          url: "https://open.spotify.com/track/05sqcYfU2wMlKwPVJ0rotq?si=4e850a474fff493d",
          favorited: false
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
        this.changeColors();
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
        this.changeColors();
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      
    },
    changeColors() {
  // Change background and player colors using a random color combination
  const randomIndex = Math.floor(Math.random() * this.colorOptions.length);
  const randomColors = this.colorOptions[randomIndex];
  document.body.style.backgroundColor = randomColors.background;
  // Update the player background color
  document.querySelector('.player').style.backgroundColor = randomColors.player;
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
