<template>
  <div>
    <p>hello world</p>
    <h3>{{greeting}}! thank you for visiting</h3>
      <button @click="setGreeting">
        NewGreeting
      </button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Greeting",
  props: {
    vmessages: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    console.log(props.vmessages)
    const randomMessage = () => props.vmessages[(Math.floor(Math.random() * props.vmessages.length))];

    console.log(randomMessage())
    const greeting = ref(randomMessage())
    const setGreeting = () => {
      greeting.value = randomMessage()
    }
    // console.log(props.messages)
    return {
      greeting,
      setGreeting
    }
  }
}
</script>

<style>

</style>