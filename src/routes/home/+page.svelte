<script lang="ts">
	import ClassTable from '../../lib/ClassTable.svelte';

	export let data;

	console.log("classes:", data.classes)
</script>

<ClassTable classes={data.classes} />