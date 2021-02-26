<template>
  <main class="container">
    <aside
      class="sidebar"
      :class="isMenuOpen ? 'sidebar-maximize' : 'sidebar-minimize'"
    >
      <Sidebar :notes="this.notes" @set-menu="setMenu" />
    </aside>
    <section
      class="content"
      :class="isMenuOpen ? 'content-minimize' : 'content-maximize'"
    >
      <div v-for="note in notes" :key="note.id">
        <Note v-if="note.isNoteOpen" :note="note" />
      </div>
    </section>
  </main>
</template>
<script>
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";
export default {
  components: { Sidebar, Note },
  data() {
    return {
      id: 1,
      notes: [],
      isMenuOpen: false,
    };
  },
  methods: {
    setMenu(data){
      this.isMenuOpen = data;
    },
    createId() {
      this.id++;
    },
    createNote() {
      this.createId();
      const note = {
        noteText: "",
        noteDate: "",
        isNoteOpen: "",
        noteId: this.id,
      };
      this.notes.push(note);
    },

  },
};
</script>
