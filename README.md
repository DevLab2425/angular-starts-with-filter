#angular-starts-with-filter

A simple filter that will return strings that start with a given character.

## Installation

Download [angular-starts-with-filter](#) or install with bower

```BASH
$ bower install angular-starts-with-filter --save
```

Load `angular-starts-with-filter.js`, then add the `starts-with-filter` module to your application.

```javascript
angular.module('yourApp', ['starts-with-filter']);
```

## Usage

```javascript
{{expression | startswith : character [: object property]}}
```

### HTML
```html
<body ng-app="filterExample">
	<div ng-controller="filterCtrl">
		<!-- Simple array of strings filtered by the letter 'A' -->
		<ul>
			<li ng-repeat="item in items | startswith:'A'"></li>
		</ul>
		<!-- An array of objects with a specific property to filter by 'A' -->
		<ul>
			<li ng-repeat="object in objects | startswith:'A': 'term'"></li>
		</ul>
	</div>
</body>
```

### Javascript
```javascript
angular.module('filterExample', ['starts-with-filter'])
	.controller('filterCtrl', ['$scope', function($scope){
		$scope.items = ['Apple', 'Ball', 'Car', 'Dog'];
		
		$scope.objects = [
			{term: 'Apple', definition: 'A red or green fruit'},
			{term: 'Ball', definition: 'A round childrens toy'},
			{term: 'Car', definition: 'A mode of transportation'},
			{term: 'Dog', definition: 'A four-legged domestic pet'}
		];
	}]);
```

### Output
Simple array of strings output: 

* Apple

Object array output: 

* Apple