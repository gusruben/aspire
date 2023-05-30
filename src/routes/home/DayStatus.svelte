<script lang="ts">
    export let day: "A" | "B";
    export let period: number;

    const inClass = period != -1;
</script>

<div id="day-status">
    <p class="day">{day}</p>
    <div class="separator"></div>
    {#if inClass}
        <p class="period">Period {period}</p>
    {:else}
        <p class="period">Not in class</p>
    {/if}
    <p class="time">{(new Date()).toLocaleTimeString()}</p>
</div>

<style lang="scss">
	@use "bulma/sass/utilities/_all" as defaults;

    #day-status {
        width: 100%;
        background-color: $primary;
        // outline: 2px solid $border-alt;
        border: 2px solid $border-alt;
        box-sizing: border-box;
        height: 3.25rem;

        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

        z-index: 1;

        * {
            display: inline-block;
            color: $text-alt;
            vertical-align: middle;
        }

        .day {
            font-size: defaults.$size-3;
            font-weight: bold;
            margin-left: 0.5rem;
            height: 3rem;
        }
        .separator {
            height: defaults.$size-3;
            width: 0.5ch;
            margin: 0.5rem;
            background-color: rgba(255, 255, 255, 0.5);
        }
        .period, .time {
            font-size: defaults.$size-4;
        }
        .time {
            float: right;
            height: 3rem;
            line-height: 3rem;
            margin-right: 0.25em;
        }
    }
</style>