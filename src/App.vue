<template>
  <main class="container">
    <aside
      class="sidebar"
      :class="isMenuOpen ? 'sidebar-maximize' : 'sidebar-minimize'"
    >
      <Sidebar :notes="notes" @set-menu="setMenu" @add-note="addNote" />
    </aside>
    <section
      class="content"
      :class="isMenuOpen ? 'content-minimize' : 'content-maximize'"
    >
      <div v-for="note in notes" :key="note.id">
        <Note
          @delete-note="deleteNote(note.id)"
          @update-note="update"
          v-if="note.isNoteOpen"
          :note="note"
          @add-note="addNote"
          @save-note="saveNote"
        />
      </div>
    </section>
  </main>
</template>
<script>
import { ref, reactive } from "vue";
import axios from "./plugins/axios";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";
export default {
  components: { Sidebar, Note },
  setup() {
    const isMenOpen = ref(false);
    const state = reactive({
      notes: [],
    });

    return { isMenOpen, state };
  },
  data() {
    return {
      notes: [],
      isMenuOpen: false,
      id: 0,
    };
  },
  async mounted() {
    axios.get("/notes").then((res) => {
      this.notes = res.data;
    });
  },
  methods: {
    setMenu(data) {
      this.isMenuOpen = data;
    },
    createId() {
      if (this.notes.length == 0)
        return (this.id = Math.floor(Math.random() * 100) + 1);
      let max = this.notes[0].id;
      for (var i = 0; i < this.notes.length; i++) {
        if (this.notes[i].id > max) {
          max = this.notes[i].id;
        }
      }
      console.log(max);
      this.id = max + 10;
      console.log(this.id);
    },
    async addNote() {
      this.createId();
      const note = {
        noteText: "",
        noteDate: new Date().toLocaleDateString(),
        isNoteOpen: true,
        noteColor: "#a477d1",
        id: this.id,
      };
      await axios
        .post(`/notes`, note)
        .then((response) => {
          const { data } = response;
          this.notes.push(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeNote(note) {
      note.isNoteOpen = false;
    },
    async deleteNote(id) {
      await axios.delete(`/notes/${id}`);
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    update(data) {
      const index = this.notes.findIndex((note) => note.id == data.id);
      this.notes[index] = data;
    },
    async saveNote(data) {
      console.log(data);
      const index = this.notes.findIndex((note) => note.id == data.id);
      console.log(data.id);
      await axios
        .put(`notes/${data.id}`, data)
        .then((res) => {
          this.notes[index] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
