<script lang="ts">
	import type { ClassInfo } from "aspen-api/dist/types";
	import { letterGrade } from "./utils";

	export let classData: ClassInfo;

	let grade = classData.grade.toString();
	
	if (grade.length == 2) grade += "."; // if it doesn't have a decimal point, add one
    grade.padEnd(5, "0") // add '.00' etc

	function visitClass() {
		window.location.pathname = "/home/" + classData.token;
	}
</script>

<tr on:click={visitClass}>
	<td>{classData.name}</td>
	<td>{classData.course}</td>
	<td>{classData.teacher}</td>
	<td><a href="mailto:{classData.email}">{classData.email}</a></td>
	<td>
		{grade}
		<!-- use our own function because sometimes there is no letter grade -->
		{letterGrade(classData.grade)}
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
		cursor: pointer;
	}
</style>
