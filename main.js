
var hackerEarth = angular.module('hackerEarth', ['ngRoute']);

// hackerEarth.config(function($routeProvider){
//   $routeProvider
//   .when('/', {
//     templateUrl :'hackerEarthStats.html',
//     controller : 'hackerEarthStatsController'
//   });
// });




hackerEarth.controller('hackerEarthStatsController',function($scope, $filter){

  function intMain(){
    $scope.mainData = [];
    $scope.backupData = [];
    var mainData = localStorage.getItem('mainData');
    if(!mainData){
    $scope.backupData = [{ title:'Monk Takes a Walk',
        imagelink:"data:image/png;base64,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",
        solvedby:14007,
        rating:4,
        tags:'Algorithms, Very-Easy, searching',
        problemgivenby:'',
        link:"https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/monk-takes-a-walk/",
        likes:15,
        linkClickCount:14,
    },
    { title:'Breakup App',
    imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyQuw4eGbArq97hRMb-TwSiYgdfAfzhScLUhy1R4JPuIS73FX",
    solvedby:3890,
      rating:4,
      tags:'Ad-Hoc, Easy',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/breakup-app/',
      likes:12,
      linkClickCount:10,
    },
    { title:"Manna's First Name",
    imagelink:"data:image/jpeg;base64,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",
      solvedby:4830,
      rating:3,
      tags:'Easy',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/mannas-first-name-4/',
      likes:16,
      linkClickCount:10,
    },
    { title:"Square Transaction",
    imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdc86xrS3Yi4CST6nRoTn8P4Go0oZMjztpO6BPYnvB-cVyDPc",
      solvedby:5074,
      rating:4,
      tags:'Algorithms, Binary Search, Easy',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/mannas-first-name-4/',
      likes:20,
      linkClickCount:15,
    },
    { title:"Policemen and thieves",
    imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcxtoDxPXEIxs-X6m148btZ-4TjjqDNTRJ9cbwvUX6jC5K6iE",
      solvedby:2264,
      rating:4,
      tags:'Algorithms, Medium, Two-pointer',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/joker-and-thieves-53e59f4a/',
      likes:25,
      linkClickCount:10,
    },
    { title:"Rest in peace - 21-1!",
    imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9bXvQnyZAAaQobX59nDWo1MxyKiXbpQIKg_M12-khnqp2AWbDQ",
      solvedby:8770,
      rating:3,
      tags:'Ad-Hoc, Basic Programming, Easy',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/rest-in-peace-21-1/',
      likes:25,
      linkClickCount:10,
    },
    { title:"Kira's Special Sequences",
    imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxtFn2mIh9WnEV8kyJ7Wh4pJl8S1o85ofDl4BxLAvkpk0Y7w-rw",
      solvedby:52,
      rating:5,
      tags:'Algorithms, Hard, Math, Recursion',
      problemgivenby:'',
      link:'https://www.hackerearth.com/practice/algorithms/dynamic-programming/2-dimensional/practice-problems/algorithm/kiras-special-sequences-1/',
      likes:5,
      linkClickCount:11,
    },
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyQuw4eGbArq97hRMb-TwSiYgdfAfzhScLUhy1R4JPuIS73FX
  ];
  $scope.mainData = $scope.backupData;
    localStorage.setItem('mainData',JSON.stringify($scope.mainData));
} else{
    $scope.backupData = JSON.parse(mainData);
    $scope.mainData = $scope.backupData;
  }



  $scope.predicate="rating";
  var totals = totalLikes();
  $scope.totalLikes = 0;
  $scope.totalHits = 0;
  totalLikes();
  totalHits();
  var tags = [];
  $scope.mainData.forEach(function(d){
    var arr = d.tags.split(',');
    arr.forEach(function(a){
      tags.push(a);
    })
    //tags.concat(arr);
  });
  $scope.uniqueTags = tags.filter(function(value, index, self){return self.indexOf(value) === index;});
  }

  function totalLikes(){
    var total=0;
    $scope.mainData.forEach(function(data){
      total+=data.likes;
    });
    $scope.totalLikes = total;
    localStorage.setItem('mainData',JSON.stringify($scope.mainData));
  };
  function totalHits(){
    var totalLinkClicks = 0;
    $scope.mainData.forEach(function(data){
      totalLinkClicks+=data.linkClickCount;
    });
    $scope.totalHits = totalLinkClicks;
    localStorage.setItem('mainData',JSON.stringify($scope.mainData));
  };

  $scope.ClickLike = function(index){
    $scope.mainData[index].likes += 1;
    totalLikes();
  };

  $scope.clickApiLinks = function(index){
    $scope.mainData[index].linkClickCount+=1;
    totalHits();
  };

  $scope.searchTags = function(search){
    //$scope.selectedTag
    //console.log(search);
    if(search!== undefined){
      var searchData = [];

      $scope.mainData.forEach(function(x){
          var index = x.tags.indexOf(search);
          if(index!=-1){
            searchData.push(x);
          }
      });
      if(searchData.length>0){
        $scope.mainData = searchData;
      }
    }
  };

  $scope.filterData = function(predicate){
    $scope.mainData = $filter('orderBy')($scope.mainData, predicate);
    //console.log(sorted);
  }

  $scope.clearSearch = function(){
    $scope.search = '';
    $scope.mainData = $scope.backupData;
  }


  intMain();
});
