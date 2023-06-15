<script lang="ts">
	import AssignmentTable from "$lib/AssignmentTable.svelte";

    export let data;
</script>

{#if data.assignments}
    <AssignmentTable assignments={data.assignments}/>
{:else}
    <h3 class="title h3 has-text-centered">No assignments found!</h3>
{/if}