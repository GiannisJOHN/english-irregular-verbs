import { words } from './words.js'

function Word(Infinitive, SimplePast, PastParticiple, translation) {
    this.Infinitive =Infinitive
    this.SimplePast = SimplePast
    this.PastParticiple = PastParticiple
    this.Μετάφραση = translation
    this.category = ''
}

Word.prototype.categorize = function() {
    if (this.Infinitive !== this.SimplePast
        && this.Infinitive !== this.PastParticiple
        && this.SimplePast !== this.PastParticiple) {
        this.category = 'allDifferent'
    } else if (this.Infinitive === this.SimplePast
        && this.Infinitive === this.PastParticiple) {
        this.category = 'allSame'
    } else if (this.Infinitive === this.SimplePast
        && this.Infinitive !== this.PastParticiple) {
        this.category = 'infinitiveAndSimplePastSAME'
    } else if (this.Infinitive !== this.SimplePast
        && this.Infinitive === this.PastParticiple) {
        this.category = 'infinitiveAndPastParticipleSAME'
    } else if (this.SimplePast === this.PastParticiple
        && this.Infinitive !== this.SimplePast
        && this.Infinitive !== this.PastParticiple) {
        this.category = 'SimplePastAndPastParticipleSAME'
    }
}

const wordsDictionary = words.reduce((accumulator, currentValue) => {

    let word = new Word(currentValue.Infinitive, currentValue.SimplePast, currentValue.PastParticiple, currentValue.Μετάφραση)
    word.categorize()

    
    accumulator[currentValue.Infinitive] = word
    return accumulator
}, {})


export default wordsDictionary