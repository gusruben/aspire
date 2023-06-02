<script lang="ts">
	import { onMount } from "svelte";

    let loggedIn = false;

    onMount(() => {
        loggedIn = !!document.cookie.includes("session=");
    })
</script>

<div class="wrapper has-text-centered">
    <h1 class="big-text">404</h1>
    <h3 class="title is-3">Sorry, that page doesn't exist.</h3>
    {#if loggedIn}
        <a href="/home">Take me home!</a>
    {:else}
        <a href="/">Take me home!</a>
    {/if}
</div>

<style lang="scss">
    @use "sass:color";

    .wrapper {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .big-text {
            font-size: 12rem;
            font-weight: bold;
        }
    }
</style>