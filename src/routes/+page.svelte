<section class="hero">
	<div class="hero-body">
		<h1 class="title is-1">Aspire</h1>
	</div>
</section>

<section class="section has-text-centered" id="login-section">
	<h1 class="title">Log In</h1>
	<form action="/login" id="login">
		<div class="field">
			<label for="" class="label">Username</label>

			<div class="control has-icons-left">
				<input type="text" class="input" placeholder="Aspen username/email" />
				<span class="icon is-small is-left">
					<i class="fas fa-user" />
				</span>
			</div>
		</div>

		<div class="field">
			<label for="" class="label">Password</label>
			<div class="control has-icons-left">
				<input type="password" class="input" placeholder="Aspen password" />
				<span class="icon is-small is-left">
					<i class="fas fa-key" />
				</span>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<button class="button is-primary">
					<span class="icon is-small">
						<i class="fas fa-right-to-bracket" />
					</span>
					<span>Log In</span>
				</button>
			</div>
		</div>
	</form>
</section>

<style lang="scss">
	#login-section {
        max-width: 40rem;
        margin: auto;
    }
</style>
