# ng.multipleSelect
Materialize Css multiple select

<p>
  <a href="https://gitter.im/miamarti/ng.multipleSelect" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/ng.multipleSelect-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.1.3-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ng.multipleSelect/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

<img src="https://miamarti.github.io/ng.multipleSelect/docs/img/ezgif.com-video-to-gif.gif">

## Bower install de dependency
```
$ bower install ng.multipleSelect --save
```

## Implementation

Inside the HTML view:
```
<ng-multiple-select ng-model="options" ng-disabled="notActive"></ng-multiple-select>
```

Inside the Controller:
```
angular.module('example').controller('ExampleController', function () {

    this.options = [
      {value: 'Nilo', label: 'Nilo', checked: false}, 
      {value: 'Tigre', label: 'Tigre', checked: false}, 
      {value: 'Ganges', label: 'Ganges', checked: false}
    ];
    
    this.notActive = false;
});
```

## Parameters

| Name         | Type    | Dinamic | Mandatory | Description                                                  |
| ------------ | ------- | ------- | --------- | ------------------------------------------------------------ |
| ng-model     | Array   | true    | true      | Scope of the attribute that will be the model                |
| ng-disabled  | Boolean | true    | false     | Set ckeditor to readOnly                                     |


## Module AngularJS include
```
angular.module('example', ["ngMultipleSelect"]);
```
