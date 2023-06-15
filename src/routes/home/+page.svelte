<script lang="ts">
	import ClassTable from './ClassTable.svelte';

	export let data;

	console.log("classes:", data.classes)
</script>

<ClassTable classes={data.classes} />