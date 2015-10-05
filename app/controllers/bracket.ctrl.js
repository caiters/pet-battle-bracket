angular.module('bracket')
.controller('BracketCtrl', function($scope){
  $scope.competitors = [
    {
      "character": "Aerfen",
      "realm": "Shandris",
      "pets": [
        {
          "name": "Dancing Water Skimmer",
          "level": 25,
          "family": "Aquatic",
        },
        {
          "name": "Anubisath Idol",
          "level": 25,
          "family": "Humanoid",
        },
        {
          "name": "Lil' Deathwing",
          "level": 25,
          "family": "Dragonkin",
        }
      ]
    },
    {
      "character": "Emacs",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Baneling",
          "level": 25,
          "family": "Critter",
        },
        {
          "name": "Lil' Ragnaros",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Chrominius",
          "level": 25,
          "family": "Dragonkin",
        }
      ]
    },
    {
      "character": "Sylphrena",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Deathy",
          "level": 25,
          "family": "Humanoid",
        },
        {
          "name": "Infected Fawn",
          "level": 25,
          "family": "Undead",
        },
        {
          "name": "Iron Starlette",
          "level": 25,
          "family": "Mechanical",
        }
      ]
    },
    {
      "character": "Eliina",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Terrible Turnip",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Topaz Shale Hatchling",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Ashstone Core",
          "level": 25,
          "family": "Elemental",
        }
      ]
    },
    {
      "character": "Jordynna",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Lil' Ragnaros",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Lunar Lantern",
          "level": 25,
          "family": "Magic",
        },
        {
          "name": "Sprite Darter",
          "level": 25,
          "family": "Dragonkin",
        }
      ]
    },
    {
      "character": "Kairiel",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Panderan Water Spirit",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Chrominius",
          "level": 25,
          "family": "Dragonkin",
        },
        {
          "name": "Iron Starlette",
          "level": 25,
          "family": "Mechanical",
        }
      ]
    },
    {
      "character": "Kurai",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Nexus Whelpling",
          "level": 25,
          "family": "Dragonkin",
        },
        {
          "name": "Emperor Crab",
          "level": 25,
          "family": "Aquatic",
        },
        {
          "name": "Dusk Spider",
          "level": 25,
          "family": "Beast",
        }
      ]
    },
    {
      "character": "Pinxy",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Nether Ray Fry",
          "level": 25,
          "family": "Flying",
        },
        {
          "name": "Sprite Darter Hatchling",
          "level": 25,
          "family": "Dragonkin",
        },
        {
          "name": "Restless Shadeling",
          "level": 25,
          "family": "Undead",
        }
      ]
    },
    {
      "character": "Crunchyroll",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Chrominius",
          "level": 25,
          "family": "Dragonkin",
        },
        {
          "name": "Cinder Kitten",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Anubisath Idol",
          "level": 25,
          "family": "Humanoid",
        }
      ]
    },
    {
      "character": "Allurien",
      "realm": "Bronzebeard",
      "pets": [
        {
          "name": "Spawn of Onyxia",
          "level": 25,
          "family": "Dragonkin",
        },
        {
          "name": "Terrible Turnip",
          "level": 25,
          "family": "Elemental",
        },
        {
          "name": "Horned Lizard",
          "level": 25,
          "family": "Beast",
        }
      ]
    }
  ];

  $scope.test = 11;

  $scope.log2 = function(val){
    return Math.log(val) / Math.LN2;
  };

  $scope.matches = function(val){
    return Math.pow(2, Math.floor($scope.log2(val)));
  };

  $scope.firstRound = function(val){
    return (val - $scope.matches(val)) * 2;
  };

  $scope.totalRounds = function(val){
    return Math.ceil($scope.log2(val));
  };

  $scope.fullRounds = function(val){
    return Math.floor($scope.log2(val));
  };
});
