<script lang="ts">
    import type { Period as PeriodData } from "aspen-api/dist/types";
	import Period from "./Period.svelte";

    export let periods: PeriodData[];
</script>

<div class="period-status">
    {#each periods as period}
        <Period {period} from="9:00AM" to="10:22AM" />
    {/each}
</div>

<style lang="scss">
    .period-status {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: $sidebar-width;

        overflow-y: auto;
        background-color: rgba($scheme-main, 0.95)
    }
</style>