<script lang="ts">
	import type { Period as PeriodData } from "aspen-api/dist/types";
	export let period: PeriodData;
	export let from: string;
	export let to: string;

	const isCurrent = period.currentPeriod;
</script>

<div class="period" class:isCurrent>
	<p class="name">
		{period.name}
	</p>
	<p class="time">{from} - {to}</p>
</div>

<style lang="scss">
	.period {
		background-color: $scheme-main;
		border-top: 1px solid $border;
		border-bottom: 1px solid $border;
		height: 3.5rem;

		&.isCurrent {
			font-weight: bold;
			background-color: transparent;

			.name {
				max-width: calc(55% - 4rem);
			}
			.time {
				max-width: 45%;
			}
		}

		p {
			height: 3.5rem;
			line-height: 3.5rem;
			margin: 0 1em;
			width: max-content;
			display: inline-block;
		}
		.time {
			float: right;
			max-width: 40%;
		}

		.name {
			max-width: calc(60% - 4rem);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis; 
			// -o-text-overflow: ellipsis;
		}
	}
</style>
