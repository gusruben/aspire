<script lang="ts">
	import Calendar from "./Calendar.svelte";
	import ClassTable from "./ClassTable.svelte";
	import Navbar from "./Navbar.svelte";
</script>

<Navbar />
<div class="layout">
	<div class="sidebar">
		<div class="calendar">
			<Calendar />
		</div>
	</div>
	<div class="main">
		<ClassTable />
	</div>
</div>


<style lang="scss">
	@import "bulma/sass/utilities/mixins";

	.layout {
		//  if the screen is too small for the table to be AT LEAST <$table_min_width>,
		//  stack everything
		@include from($sidebar-width + $table-min-width) {
			display: flex;
		}
		width: 100%;

		> * {
			flex-grow: 1;
		}

		.sidebar {
			max-width: $sidebar-width;

			> .calendar {
				margin: 15px;
			}
		}
	}
</style>