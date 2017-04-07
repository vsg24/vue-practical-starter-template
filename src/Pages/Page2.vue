<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<router-link to="/" class="ui button"><i class="icon chevron left"></i>Home</router-link>
		<button class="ui button green" id="clickMeBtn">jQuery event, Click me!</button>
		<br><br>
		<div class="ui one column centered grid container">
			<div class="column">
				<table class="ui celled table">
					<thead>
					<tr>
						<th>Header</th>
						<th>Header</th>
						<th>Header</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							<div class="ui ribbon label">First</div>
						</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<th colspan="3">
							<div class="ui right floated pagination menu">
								<a class="icon item">
									<i class="left chevron icon"></i>
								</a>
								<a class="item">1</a>
								<a class="item">2</a>
								<a class="item">3</a>
								<a class="item">4</a>
								<a class="icon item">
									<i class="right chevron icon"></i>
								</a>
							</div>
						</th>
					</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			TITLE: 'Page 2',
			msg: 'This is page 2',
		};
	},
	head: { title() { return { inner: this.TITLE } } },
	// mounted() is a function called by Vue when page is completely loaded into dom
	// see: https://vuejs.org/v2/api/#mounted and http://stackoverflow.com/questions/40714319/how-to-call-a-vue-js-function-on-page-load for more
	mounted() {
	    console.log('Page loaded');
		$('#clickMeBtn').click(function (e) {
			alert('Hi!');
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
