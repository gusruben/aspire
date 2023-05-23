<script lang="ts">
	import type { ClassInfo } from "aspen-api/dist/types";
	import Class from "./ClassRow.svelte";

    // dummy class info
    const classes: ClassInfo[] = [
        {
            token: "",
            name: "Test Class",
            course: "TC-001",
            term: "Q1",
            teacher: "Bar, Foo",
            email: "foo.bar@example.com",
            classroom: "123A",
            letterGrade: "A",
            grade: 98.1,
            absent: 1,
            tardy: 2,
            dismissed: 3,
        },
        {
            token: "",
            name: "Test Class",
            course: "TC-001",
            term: "Q1",
            teacher: "Bar, Foo",
            email: "foo.bar@example.com",
            classroom: "123A",
            letterGrade: "A",
            grade: 98.1,
            absent: 1,
            tardy: 2,
            dismissed: 3,
        },
        {
            token: "",
            name: "Test Class",
            course: "TC-001",
            term: "Q1",
            teacher: "Bar, Foo",
            email: "foo.bar@example.com",
            classroom: "123A",
            letterGrade: "A",
            grade: 98.1,
            absent: 1,
            tardy: 2,
            dismissed: 3,
        }
    ]
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