<script lang="ts">
	import { onMount } from "svelte";

    onMount(async () => {
        const bulmaCalendar = (await import("bulma-calendar")).default;

        bulmaCalendar.attach(".calendar-readonly div", {
            type: "date",
            displayMode: "inline",
            showFooter: false,
            enableMonthSwitch: false,
            enableYearSwitch: false,
            startDate: new Date(),
        });

    })
</script>

<div class="calendar-readonly">
    <!-- dummy element, this will get replaced -->
    <div />
</div>

<style lang="scss">
    :global(.calendar-readonly .datepicker-date) {
        pointer-events: none;
    }
    :global(.datepicker-nav) {
        display: none !important;
    }
    // date display height: calc(2.5rem + 16px)
    // weekday height: 1.5em + 0.6rem

    .calendar-readonly {
        display: inline-block;

        width: 320px; // static value set in the bulma-calendar code
        // this makes the height static, so the page doesn't jump when it loads in
        $date-display-height: calc(2.5rem + 16px);
        // 0.75rem from the font size, 1.5 from the line height,
        //0.6rem from 0.3rem padding being applied twice
        $weekday-height: (0.75rem *  1.5) + 0.6rem + 0.6rem;
        // 2.2rem for font size, 0.2rem for padding, 5 rows 
        $calendar-height: (2.2rem + 0.2rem) * 5;
        height: calc(
            $date-display-height + $weekday-height + $calendar-height
        )
    }
</style>