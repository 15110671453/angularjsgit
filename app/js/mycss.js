var mycss = angular.module('MyCSS',[]);

mycss.controller('CSSCtrl', ['$scope', function($scope){

	$scope.color = "green";
	$scope.setRed = function(){
		$scope.color = "red";
	};
}]);

mycss.controller('HeaderController', ['$scope', function($scope){

	$scope.isError = false;
	$scope.isWarning = false;
	$scope.messageText = '正常';
	$scope.showError = function(){
			$scope.isError = true;
			$scope.isWarning = false;
			$scope.messageText = '错误';
	};
	$scope.showWarning = function(){
			$scope.isError = false;
			$scope.isWarning = true;
				$scope.messageText = '警告';
	};
	
}]);