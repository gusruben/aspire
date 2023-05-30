<script lang="ts">
    import type { ClassInfo } from "aspen-api/dist/types";

    export let classData: ClassInfo;
</script>

<tr>
    <td>{classData.name}</td>
    <td>{classData.course}</td>
    <td>{classData.teacher}</td>
    <td><a href="mailto:{classData.email}">{classData.email}</a></td>
    <td>{classData.grade} {classData.letterGrade}</td>
</tr>

<style lang="scss">
	@import "bulma/sass/utilities/mixins";

    // responsiveness

    // hide email below widescreen
    @include until-widescreen {
        td:nth-child(4) {
            display: none;
        }
    }
    // hide course code on tablet & below
    @include touch {
        td:nth-child(2) {
            display: none;
        }
    }
</style>