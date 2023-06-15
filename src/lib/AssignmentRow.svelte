<script lang="ts">
	import type { Assignment } from "aspen-api/dist/types";
	import { letterGrade } from "./utils";

	export let assignmentData: Assignment;

    let grade = assignmentData.grade.toString();

    if (grade.length <= 3) grade += ".00"; // make all the grades the same length
</script>

<tr>
	<td>{assignmentData.name}</td>
	<td>{assignmentData.dateAssigned}</td>
	<td>{assignmentData.dateDue}</td>
	<td>
        {grade}
        {assignmentData.grade != "Ungraded" ? letterGrade(assignmentData.grade) : ""}
    </td>
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

	tr:hover {
		background-color: $scheme-main-bis;
		// cursor: pointer;
	}
</style>
