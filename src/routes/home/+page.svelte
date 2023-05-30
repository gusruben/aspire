<script lang="ts">
	import Calendar from "./Calendar.svelte";
	import ClassTable from "./ClassTable.svelte";
	import DayStatus from "./DayStatus.svelte";
	import Navbar from "./Navbar.svelte";
	import PeriodStatus from "./PeriodStatus.svelte";
	import type { Day, Period as PeriodData, Schedule } from "aspen-api/dist/types";

	export let data;

	const schedule = data.schedule as Schedule;

	const periods: PeriodData[] = schedule[schedule.currentDay as Day];

	const days: Day[] = ["M", "T", "W", "Th", "F1", "F2"];
	const currentDay = ["A", "B"][days.indexOf(schedule.currentDay as Day) % 2] as "A" | "B";
	const currentPeriod = periods.findIndex(period => period.currentPeriod);
</script>

<Navbar />
<div class="layout">
	<div class="sidebar">
		<div class="calendar">
			<Calendar />
		</div>
		<DayStatus day={currentDay} period={currentPeriod}/>
		<PeriodStatus {periods} />
	</div>
	<div class="main">
		<ClassTable classes={data.classes}/>
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