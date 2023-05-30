<script lang="ts">
	import Calendar from "./Calendar.svelte";
	import ClassTable from "./ClassTable.svelte";
	import DayStatus from "./DayStatus.svelte";
	import Navbar from "./Navbar.svelte";
	import PeriodStatus from "./PeriodStatus.svelte";
	import type { Period as PeriodData } from "aspen-api/dist/types";

	// dummy data
	const periods: PeriodData[] = [
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: true
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
		{
			name: "Science",
			course: "", teacher: "", room: "",
			currentPeriod: false
		},
	]
</script>

<Navbar />
<div class="layout">
	<div class="sidebar">
		<div class="calendar">
			<Calendar />
		</div>
		<DayStatus day="B" period={3}/>
		<PeriodStatus {periods} />
	</div>
	<div class="main">
		<ClassTable />
	</div>
</div>


<style lang="scss">
	@use "sass:math";
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
			@include tablet {
				max-width: $sidebar-width;
			}
			background-color: $scheme-alt;
			// z-index: -1;
			overflow: hidden;

			display: flex;
			flex-direction: column;
			height: calc(100vh - 3.25rem);

			> .calendar {
				margin: math.div($sidebar-width - 320px, 2);
				margin-top: 0.5em;
			}
		}
	}
</style>