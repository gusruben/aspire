<script lang="ts">
	import Calendar from "../../lib/Calendar.svelte";
	import ClassTable from "../../lib/ClassTable.svelte";
	import DayStatus from "../../lib/DayStatus.svelte";
	import Navbar from "../../lib/Navbar.svelte";
	import PeriodStatus from "../../lib/PeriodStatus.svelte";
	import type { Day, Period as PeriodData} from "aspen-api/dist/types";

	export let data;

	const schedule = data.schedule;

	const periods: PeriodData[] = schedule[schedule.currentDay as Day];

	const days: Day[] = ["M", "T", "W", "Th", "F1", "F2"];

	let currentDay: "A" | "B" | "X";
	if (periods) { // periods is null if it's not a school day
		currentDay = ["A", "B"][days.indexOf(schedule.currentDay as Day) % 2] as "A" | "B";
	} else {
		currentDay = "X"; // x when it's a weekend or summer or whatever
	}

	let currentPeriod: number | null;
	if (periods) { 
		currentPeriod = periods.findIndex(period => period.currentPeriod) + 1;
	} else {
		currentPeriod = null;
	}

    console.log("\n\nCURRENT PERIOD:",currentPeriod);

</script>

<Navbar name={data.name}/>
<div class="layout">
	<div class="sidebar">
		<div class="calendar">
			<Calendar />
		</div>
		<DayStatus day={currentDay} period={currentPeriod} />
		<PeriodStatus {periods} />
	</div>
	<div class="main">
		<slot />
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
			@include from($sidebar-width + $table-min-width) {
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

		.main {
			border-left: 1px solid $border;
		}
	}
</style>
