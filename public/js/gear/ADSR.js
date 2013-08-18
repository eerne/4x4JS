function ADSR(audioContext, param, attack, decay, sustain, release) {

	this.beginAttack = function(when) {
		when = when !== undefined ? when : 0;
		var now = audioContext.currentTime + when;
		param.cancelScheduledValues(now);
		param.setValueAtTime(0, now);
		param.linearRampToValueAtTime(1, now + attack);
		param.linearRampToValueAtTime(sustain, now + attack + decay);
	};

	this.beginRelease = function() {
		var now = audioContext.currentTime;
		param.cancelScheduledValues(value);
		param.linearRampToValueAtTime(0, now + release);
	};

}

module.exports = ADSR;