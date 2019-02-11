script = {
	start: new Ln(['Why hello there yes this is a long sentence hopefilly it fills ip the whole box uh huh yup filling it up'],['there'],'person'),
	there: new Ln(['oh god pls work'],['choice'],'other'),
	choice: new Ch(['first', 'other','yuss'], ['start','there','start'],'person')

}