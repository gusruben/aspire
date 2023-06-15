<script lang="ts">
	import type { Assignment } from "aspen-api/dist/types";
	import AssignmentRow from "./AssignmentRow.svelte";

	export let assignments: Assignment[];
</script>

<table class="table is-fullwidth">
	<thead>
		<tr>
			<th>Assignment Name</th>
			<th>Date Assigned</th>
			<th>Date Due</th>
			<th>Grade</th>
		</tr>
	</thead>
	<tbody>
		{#each assignments as assignmentData}
            <AssignmentRow {assignmentData} />
		{/each}
	</tbody>
</table>

<style lang="scss">
	@import "bulma/sass/utilities/mixins";

	thead {
		outline: 2px solid $border-alt;
		outline-offset: -2px;
	}
	table {
		border-bottom: 1px solid $border;
	}

	// responsiveness

	// hide date assigned on tablet & below
	@include touch {
		th:nth-child(2) {
			display: none;
		}
	}
</style>
