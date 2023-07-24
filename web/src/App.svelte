<script >
    import { onMount } from "svelte";


     import Client from "../Client/dist/index"
     const client = new Client()
     import { writable } from "svelte/store";
     let messages = writable([]);
     let value = "";
     const date = new Date()

     onMount(async () => {
          const _messages = await client.message.get()
          console.log(..._messages)
          messages.update((prev) => [...prev, ..._messages])
     })

     client.event.listen('Message', (message) => {
          console.log(message)
          messages.update((prev) => [...prev , message])
     })

     const submitHandle = (e) => {
          e.preventDefault();
          if (!value) return
          client.message.send({content: value, createdAt: date})
          value = "";
     };
     
</script>

<div class="messages-container">
     {#each $messages as message }
<div>
     <h1>{message.content}</h1>
     <small>{message.createdAt}</small>
</div>
{/each}
</div>

<form on:submit={submitHandle}>
     <div class="input-container">
          <input           
               style="display: inline-flex;"
               placeholder="Write a Message"
               bind:value
               on:input={(e) => {
                    value = e.target.value;
               }}
          /><button type="submit" style="display: inline-flex; width: 5%;"
               >Send</button
          >
     </div>
</form>

<style>
     :global(h1, h2, h3, h4, h5, h6, p) {
          margin: 0;
          padding: 0;
     }
     .input-container {
          position: fixed;
          bottom: 0;
          width: 100%;
          margin: 0;
          left: 0;
     }
     .input-container > input {
          width: 95%;
          margin: 0;
          padding: 10px 14px;
          font-size: 20px;
     }
     .input-container > input:focus {
          outline: 0;
          border: solid 1px rgb(109, 109, 219);
          border-radius: 0;
     }
     .messages-container {
          margin-bottom: 5rem;
     }
</style>
