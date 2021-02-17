<script>
  import Spinner from '../util/Spinner.svelte';

  const ADD_POST_URL =
    'https://us-central1-kylefolio.cloudfunctions.net/comments/add';
  const LIST_POST_URL =
    'https://us-central1-kylefolio.cloudfunctions.net/comments/list';

  export let id;

  let comments = null;
  let errorMessage = '';
  let name = '';
  let comment = '';
  let isPosting = false;
  let hasPosted = false;

  $: buttonMessage = isPosting ? '...' : 'Post';

  async function updateComments() {
    await fetch(`${LIST_POST_URL}?id=${id}`)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((res) => res.text())
      .then((text) => {
        comments = JSON.parse(text).sort((a, b) => b.time - a.time);
      })
      .catch(() => {
        comments = [];
      });
  }

  function formatDate(time) {
    return new Date(time).toLocaleString();
  }

  async function postComment() {
    if (isPosting) {
      return;
    }

    if (!name || !comment) {
      errorMessage = 'All fields required';
      return;
    }

    isPosting = true;
    const response = await fetch(`${ADD_POST_URL}?id=${id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, comment }),
    });
    const { status } = await response.json();
    if (status === 'success') {
      await updateComments();
      hasPosted = true;
    } else {
      errorMessage = 'Error posting comment';
    }
    isPosting = false;
  }

  updateComments();
</script>

<h4>Comments</h4>

<hr />

{#if !hasPosted}
  <div>
    <input maxlength="64" type="text" placeholder="Name" bind:value={name} />
  </div>

  <div>
    <textarea maxlength="1024" placeholder="Comment" bind:value={comment} />
  </div>

  <button on:click={postComment}>{buttonMessage}</button>
  <span class="error">{errorMessage}</span>
{/if}

{#if comments === null}
  <div class="spinner-container">
    <Spinner />
  </div>
{:else}
  {#each comments as comment}
    <h4>{comment.name}</h4>
    <p class="date">
      <em>{formatDate(comment.time)}</em>
    </p>
    <p class="comment">{comment.comment}</p>
    <hr />
  {/each}
{/if}

<style>
  h4 {
    font-size: 1.1em;
    margin-bottom: 0.25em;
  }

  p.date {
    margin: 0;
  }

  p.comment {
    margin-left: 1em;
  }

  textarea {
    resize: vertical;
    width: 100%;
    min-height: 5em;
    box-sizing: border-box;
  }

  input,
  textarea,
  button {
    font-size: 1em;
    font-family: 'IBM Plex Mono', monospace;
    color: #2e4756;
  }

  input {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  button {
    background-color: #ffc984;
    border: 1px solid #b7a082;
    margin-top: 0.25em;
  }

  button:hover,
  button:focus {
    background-color: #ffa635;
  }

  .error {
    color: red;
  }

  .spinner-container {
    height: 40px;
  }
</style>
