<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message"> new message (enter to add)</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="text-red" v-if="feedback">{{feedback}}</p>
        </form>
    </div>
</template>
<script>
import db from "@/firebase/init";
export default {
  name: "new-message",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db
          .collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            date: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.feedback = null;
        this.newMessage = null;
      } else {
        this.feedback = "you must enter a message in order to send one";
      }
    }
  }
};
</script>
<style>
</style>

