<script lang="ts">
	export let name = ""; // student name

	function logout() {
		const form = document.getElementById("logout") as HTMLFormElement;
		form.submit();
	}
</script>

<form id="logout" action="?/logout" style="display: none" method="POST"/>

<div class="navbar">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="/logo.png" alt="Aspire" />
		</a>
	</div>

	<div class="navbar-menu">
		<div class="navbar-start">
			<a href="/home" class="navbar-item">Dashboard</a>
			<a href="/home" class="navbar-item">Schedule</a>
			<a href="/home" class="navbar-item">Calendar</a>
		</div>

		<div class="navbar-end">
			<div class="navbar-item has-dropdown is-hoverable">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="navbar-link">{name}</a>

				<div class="navbar-dropdown is-right">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="navbar-item" on:click={logout} on:keypress={logout}>Log Out</a>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="navbar-item">Settings</a>
				</div>
			</div>
		</div>
	</div>
</div>
