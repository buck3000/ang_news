app.factory('Post', function($resource){
	return $resource('https://fiery-fire-4912.firebaseio.com/posts/:id.json');
});
