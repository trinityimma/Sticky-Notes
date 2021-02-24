<template>
    <main class="container">
      <aside class="sidebar">
        <Sidebar>Sidebar</Sidebar>
      </aside>
      <section class="content">
        <Note>Note</Note>
      </section>
    </main>
    </template>
<script>
import Sidebar from './components/Sidebar'
import Note from './components/Note'
export default {
  components: {Sidebar, Note},
  data() {
    return {
      title: "Sticky Notes",
    }
  }
}
</script>
<style>

.content {
  padding: 20px;
}
</style>

