<script lang="ts">
	import type { ClassInfo } from "aspen-api/dist/types";
	import Class from "./ClassRow.svelte";

    export let classes: ClassInfo[];
</script>

<table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Class</th>
            <th>Course</th>
            <th>Teacher</th>
            <th>Email</th>
            <th>Grade</th>
        </tr>
    </thead>
    <tbody>
        {#each classes as classData}
            <Class {classData} />
        {/each}
    </tbody>
</table>

<style lang="scss">
    thead {
        outline: 2px solid $border-alt;
        outline-offset: -2px;
    }
    table {
        border-bottom: 1px solid $border;
    }
</style>