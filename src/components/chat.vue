<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                  <li v-for="item in messages" :key="item.id">
                   
                        <span class="teal-text">{{item.name}}</span>
                        <span class="grey-text text-darken-3">{{item.content}}</span>
                        <span class="grey-text time">{{item.timestamp}}</span>

                    </li>
                </ul>
            </div>
            <div class="card-action">
               <newMessage :name="name"></newMessage>   
            </div>
        </div>
    </div>
</template>
<script>
import newMessage from "@/components/new-message";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "chat",
  props: ["name"],
  components: {
    newMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("date");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().date).format("lll")
          });
        }
      });
    });
  }
};
</script>
<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>

