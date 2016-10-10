
/*
control shift h 自动格式化
control shift d 复制
*/

var userInfoModule = angular.module('databinding',[]);
userInfoModule.controller('secondcontr', ['$scope', function($scope){
	$scope.userInfo = {
		email : '15110671453@163.com',
		passwd : '123457',
		autologin : true
	};
	$scope.getFormData = function(){

		console.log($scope.userInfo);
	};
	$scope.setFormData = function(){
		$scope.userInfo = {
		email : '121115168@163.com',
		passwd : '7654312',
		autologin : false
	};
	};
}]);
userInfoModule.controller('firstcontrol', ['$scope', function($scope){
	$scope.greeting = {
		text : 'Hello DataBinding'
	} ;
}]);