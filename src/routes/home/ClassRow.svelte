<script lang="ts">
    import type { ClassInfo } from "aspen-api/dist/types";

    export let classData: ClassInfo;
</script>

<tr>
    <td>{classData.name}</td>
    <td>{classData.course}</td>
    <td>{classData.teacher}</td>
    <td><a href={classData.email}>{classData.email}</a></td>
    <td>{classData.grade} {classData.letterGrade}</td>
</tr>

