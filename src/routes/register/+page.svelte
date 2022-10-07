<form method="post" action="/register">
	<fieldset id="1">
		<label>first</label>
		<input type="text" name="first" />
		<div>
			<a href="#2">next</a>
		</div>
	</fieldset>
	<fieldset id="2">
		<label>second</label>
		<input type="text" name="second" />
		<div>
			<a href="#1">back</a>
			<a href="#3">next</a>
		</div>
	</fieldset>
	<fieldset id="3">
		<label>third</label>
		<input type="text" name="third" />
		<div>
			<a href="#2">back</a>
			<button>submit</button>
		</div>
	</fieldset>
</form>

<style>
	form {
		max-width: 400px;
		margin: auto;

		padding: 1em;
		background-color: lightgrey;
		border-radius: 1em;
	}

	label {
		justify-self: right;
	}

	input {
		padding: 0.5em 1em;
	}

	fieldset {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1em;
		align-items: center;
		border: none;
	}

	fieldset:not(:target) {
		display: none;
	}

	div {
		grid-column: 2;

		display: flex;
		gap: 1em;
		justify-content: right;
	}

	a,
	button {
		border: none;
		background-color: darkgrey;
		text-decoration: none;
		padding: 0.5em 1em;
		font-family: inherit;
		font-size: 0.8em;
	}

	a:visited,
	a:link {
		color: inherit;
	}
</style>
