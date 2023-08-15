<script lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {

      calendarOptions: {
        plugins: [dayGridPlugin,    interactionPlugin],
        initialView: 'dayGridMonth',eventClick: function() {
          alert('a day has been clicked!');
        },
        headerToolbar: {
          right: 'prev,next',
          center: 'title'},
        editable: false,
        weekends: true,
        events: [
          { title: 'Meeting', start: new Date() }
        ]
      }
    }
  }
}
</script>

<template>
  <h1>Demo App</h1>
  <FullCalendar :options='calendarOptions' />
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
