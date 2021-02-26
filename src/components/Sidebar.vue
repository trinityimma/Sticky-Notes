<template>
  <div>
    <div class="menu" :class="isMenuOpen? 'row': ''">
      <div>
        <span class="open-menu" v-if="!isMenuOpen">
          <svg
            @click="setMenu(true)"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
        <span class="close-menu" v-if="isMenuOpen" @click="setMenu(false)"
          >x</span
        >
      </div>
      <div>+</div>
    </div>
    <div class="sub-menu" v-if="isMenuOpen">
      <h1>Sticky Notes</h1>
      <div class="searchbar">
        <input placeholder="Search..." />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </div>
      </div>
      <div class="notes-container">
        <div class="note-holder">
          <div class="line"></div>
          <div class="note-content">
            <div class="note-date">Jan 22</div>
            <p class="note-text">Note Text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    setMenu(data) {
      this.isMenuOpen = data;
      this.$emit("set-menu", data);
    },
  },
};
</script>
