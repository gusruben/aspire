<script lang="ts">;
	import Period from "./Period.svelte";
	import type { Period as PeriodData } from "aspen-api/dist/types";

	export let periods: PeriodData[];
</script>

<div class="period-status">
	{#each (periods || []) as period}
		<Period {period} from="9:00AM" to="10:22AM" />
	{/each}
</div>

<style lang="scss">
	@import "bulma/sass/utilities/mixins";

	.period-status {
		position: relative;
		width: 100%;
		height: 100%;
		@include from($sidebar-width + $table-min-width) {
			max-width: $sidebar-width;
		}

		overflow-y: auto;
		background-color: rgba($scheme-main, 0.95);
	}
</style>
