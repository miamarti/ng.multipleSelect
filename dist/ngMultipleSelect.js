(function () {
    'use strict';
    (angular.module('ngMultipleSelect', ['ng'])).directive('ngMultipleSelect', [
        function () {
            return {
                restrict: 'E',
                scope: {
                    ngModel: '=ngModel',
                    ngDisabled: '=ngDisabled'
                },
                link: function ($scope, elem) {
                    
                    /*
                     * Update component method
                     * @param
                     * @return
                     * */
                    var setUpdate = function (data) {
                        $scope.label = 'Selecione';
                        if (data) {                    
                            var activeList = ([].map.call(data, function (obj) {
                                if (obj.checked) {
                                    return obj.label;
                                }
                            })).filter(function (line) {
                                return line;
                            });
                            $scope.label = activeList.length > 0 ? activeList.join(', ') : 'Selecione';
                        }
                    };
                    $scope.$watchCollection('ngModel', setUpdate);

                    /*
                     * Ckeck All method
                     * @param
                     * @return
                     * */
                    $scope.checkAll = function () {
                        for (var key in $scope.ngModel) {
                            $scope.ngModel[key].checked = $scope.checkAllChecked;
                        }
                        setUpdate($scope.ngModel);
                    };

                    /*
                     * Check method
                     * @param
                     * @return
                     * */
                    $scope.checkClick = function () {
                        $scope.checkAllChecked = false;
                        setUpdate($scope.ngModel);
                    };

                    /*
                     * Open method
                     * @param
                     * @return
                     * */
                    $scope.setOpen = function () {
                        if (elem[0].attributes['ng-disabled']) {
                            if (!$scope.ngDisabled) {
                                $scope.open = true;
                            }
                        } else {
                            $scope.open = true;
                        }
                    };

                    /*
                     * Closed method
                     * @param
                     * @return
                     * */
                    $scope.setClosed = function () {
                        $scope.open = false;
                    };
                    
                    setInterval(function () {
                        setUpdate($scope.ngModel);
                    }, 100);
                },
                template: function (eltm, attr) {
                    var html = '',
                        key = parseInt(Math.random() * 100000);
                    html += '<div class="multipleSelect" ng-class="{\'disabled\' : ngDisabled}">';
                    html += '   <div class="truncate" ng-click="setOpen()">{{label}}</div>';
                    html += '   <div class="blanket" ng-show="open" ng-click="setClosed()"></div>';
                    html += '   <div class="list animate-show-hide" ng-show="open">';
                    html += '       <div class="label" ng-click="setClosed();">Selecione</div>';
                    html += '       <div class="lineCheck"><input ng-checked="checkAllChecked" ng-model="checkAllChecked" type="checkbox" class="filled-in" id="filled-in-box-' + (attr.ngOptions ? attr.ngOptions : '') + key + '" ng-click="checkAll()" /><label for="filled-in-box-' + (attr.ngOptions ? attr.ngOptions : '') + key + '">Todos</label></div>';
                    html += '       <div class="lineCheck" ng-repeat="$check in ngModel"><input ng-checked="$check.checked" ng-model="$check.checked" ng-click="checkClick()" type="checkbox" class="filled-in" id="filled-in-box-' + (attr.ngOptions ? attr.ngOptions : '') + key + '{{$id}}" /><label for="filled-in-box-' + (attr.ngOptions ? attr.ngOptions : '') + key + '{{$id}}">{{$check.label}}</label></div>';
                    html += '   </div>';
                    html += '</div>';
                    return html;
                }
            };
        }]);
})(window, document);
