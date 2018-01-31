var Animal = function (params) {
    this.type = params.type
    this.sound = params.sound
    this.limbs = params.limbs
}

Animal.prototype.logLimbs = function () {
    var limbsString = this.limbs.join(', ')
    console.log(limbsString)
}

var dog = new Animal ({
    type: 'Dog',
    sound: 'Woof!',
    limbs: ['front left leg', 'front right leg', 'back left leg', 'back right leg']
})

var snail = new Animal ({
    type: 'Gary the Snail',
    sound: 'Meow'
})

snail.logLimbs()