 
/*双向数据绑定

使用ng-app 声明angularjs的管理边界



常见的双花括号的取值表达式 与 ng-bind指令
 
 双向绑定的典型场景--表单


 动态切换标签 双向绑定可以改变数据 也可以做到样式控制

 ng-show 和 ng-hide
 
 ng-class

 ng-animate
*/


 var app = angular.module('databinding',[]);

app.controller('firstcontrol', ['$scope', function firstMethod($scope){
	$scope.greeting={
		text:'hello data binding'
	};
}]);