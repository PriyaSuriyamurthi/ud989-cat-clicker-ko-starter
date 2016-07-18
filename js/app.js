catgroup =[
	{
			clickCount : 0,
			name: "Fluffy",
			imgSrc: "img/cat1.jpg",
			nickName: ["fluffy","bluffy","chirppy"]
	},
	{
	clickCount : 0,
		name: "bluffy",
		imgSrc: "img/cat2.jpg",
		nickName: ["muffy"]
	},
	{
		clickCount : 0,
		name: "Gluffy",
		imgSrc: "img/cat3.jpg",
		nickName: ["bluffy","chirppy"]
	},
	{
		clickCount : 0,
		name: "Zuffy",
		imgSrc: "img/cat4.jpg",
		nickName: ["luffy","nuffy","Ruffy"]
	},
	{
		clickCount : 0,
		name: "Puffy",
		imgSrc: "img/cat5.jpg",
		nickName: ["chirppy"]
	}];

var Cat = function(data) {
	var self = this;
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	
	this.nickName = ko.observableArray(data.nickName);
	
	this.level = ko.computed(function() {	
		var levels;
		if(this.clickCount() <= 7)
		{
			levels = "new-born";
		}
		else if(this.clickCount() > 7 && this.clickCount() < 13)
		{
			levels = "infant";
		}
		else if(this.clickCount() > 12 && this.clickCount() < 20)
		{
			levels = "Teen";
		}
		else if(this.clickCount() > 19)
		{
			levels ="adult";
		}
		return levels;
	},self);
};

var ViewModel = function() {
	var self= this;

	this.catList =  ko.observableArray([]);
	catgroup.forEach(function(catItems)
	{
		self.catList.push(new Cat(catItems));
	});
	this.currentCat = ko.observable(this.catList() [0]);
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	this.clickChange = function(clickedCat) {	
		self.currentCat(clickedCat);	
	};

}
ko.applyBindings(new ViewModel());