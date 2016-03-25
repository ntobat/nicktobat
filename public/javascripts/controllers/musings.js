angular.module('nickyT')
.controller('MusingsCtrl', ['$scope', function MusingsCtrl($scope){
	$scope.musings = [
		{
			name: 'The Meaning of Meaning',
			body: 'Searching for meaning or purpose is a fool’s errand. There is no universal meaning, because “meaning” is a purely human notion. We invented meaning itself, so we can invent any meaning for life that we like. “Life is what you make it”. Our capacity for self-awareness and abstract thought doesn’t imbue us with some great destiny — we are just an odd bipedal animal species rampaging across our planet. The search for meaning is really the search for guidance on how to live our lives. Because, if you didn’t know already, the truth is that we are so incredibly free, free to do whatever we want. But freedom isn’t useful! We need to organize it with rules. I’ll tell you why the search for meaning seems so essential to human life. It’s because all that freedom is too much to handle. It’s too big. We need somebody or something to tell us what to do!',
			date: 'Nov 17 2015',
			get preview(){
				var arr = this.body.split(" ");
				var pre = [];
				for(var x = 0; x < 10; x++){
					pre.push(arr[x]);
				}
				return pre.join(" ");
			}
		},
		{
			name: 'Autonomy',
			body: 'Autonomy has been great for human self-realization recently, but sometimes we need to think collectively in order to do the right thing. And I don’t mean treaties or agreements between nations, I mean every decision-maker needs to consider the impact of their decision on the survival of the planet. The earth is the only thing keeping us alive.',
			date: 'July 3 2015',
			get preview(){
				var arr = this.body.split(" ");
				var pre = [];
				for(var x = 0; x < 10; x++){
					pre.push(arr[x]);
				}
				return pre.join(" ");
			}	
		},
		{
			name: 'Nothing is Known',
			body: "Nothing is known of any one thing except how it relates to other things. If you lived in a place where the sun shone all day and night and it was always at least 90deg Fahrenheit, and you had no refrigeration technology, you wouldn't be saying oh it's so hot, because you don't know anything but hot. Since you can't compare it to a colder temperature, you wouldn't even know that it's hot.",
			date: 'June 6 2015',
			get preview(){
				var arr = this.body.split(" ");
				var pre = [];
				for(var x = 0; x < 10; x++){
					pre.push(arr[x]);
				}
				return pre.join(" ");
			}	
		},
		{
			name: 'Problems of Scale',
			body: "We have so much trouble in the world because we can't study ourselves from a bird's eye view the way we can study ants or whatever, we are just self-aware \"animals\" scurrying about. Sure, we can run psychology experiments and publish grand theories, but somehow we don’t realize that it’s all astoundingly biased, humans theorizing about humans. The world is huge. Each human on it is really fucking small in comparison. However, we like to think that, small as we are, we can handle anything. Like global warming, for example. We know it’s happening, we know what causes it, and we know it will kill us, but despite all this knowledge, we’ve barely even bothered to tap the brakes as we screech around hairpin turns on the road of progress. If it does end up killing us, we will all be found posthumously guilty. But wait, you say. We would never let it get that far! I answer, we already have. Nearly every aspect of life can be connected to the problem. Let me give some examples: I am typing on my laptop, which needs to be charged with electricity, which is produced by coal-burning power plants. Our towns are somehow so spread out and at the same time so densely packed with people. If I want to eat I have to drive to the grocery store, waiting in traffic as my car and all the cars around me burn carelessly through the earth’s oil reserves. We cut down vast swathes of life-giving forest to harvest wood for our buildings and to make room for our farms. We ruin the soil by planting in the same place repeatedly. The list goes on forever. You know that. In fact, everyone knows all these things. We know exactly which activities are doing the most harm, but we don’t really…. care. Why? Scale. The problem is just too big, and we are far too small, and the simplest solution is simply too horrible to think about. Any “go green” practices I might implement throughout my lifetime would be completely cancelled out by the birth of one or two more kids. If we really cared, we wouldn’t be regulating carbon emissions; if we really cared, we would shut down the factory! But we won’t. I don’t think we ever will. Because the problem is too big. It looms over us like an elephant might loom over an ant. And just like the ant, we scurry on about our business as if we didn’t even know the elephant was there. We will continue to type on our computers, drive around town, destroy forests, ruin fields, and deplete aquifers, because we don’t see the problem looming over us. It has no bearing on our day to day lives, so it might as well be happening on another planet.",
			date: 'Nov 17 2015',
			get preview(){
				var arr = this.body.split(" ");
				var pre = [];
				for(var x = 0; x < 10; x++){
					pre.push(arr[x]);
				}
				return pre.join(" ");
			}	
		}
	]
}])