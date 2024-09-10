import {useVuelidate} from '@vuelidate/core'
import {required, minLength } from '@vuelidate/validators'

export default class Traveler {

    constructor(id) {
        this.travelerId = id
        this.name = {
            firstName: '',
            lastName: ''
        }
        this.dateOfBirth = "1980-01-01"
        this.gender = null
        this.contact = {
            emailAddress: '',
            phones: []
        }
        this.valid = false
    }

    toJson() {
        let phones = []

        if (this.contact.phones && this.contact.phones.length > 0) {
            phones = this.contact.phones.map(phone => {
                return {
                    'deviceType': phone.deviceType,
                    'countryCallingCode': phone.countryCallingCode,
                    'number': phone.number
                }
            })
        }

        return {
            'id': this.travelerId,
            'dateOfBirth': this.dateOfBirth,
            'name': {
                'firstName': this.name.firstName,
                'lastName': this.name.lastName
            },
            'gender': this.gender,
            'contact': {
                'emailAddress': this.contact.emailAddress,
                'phones': phones
            },
            'documents': []
        }
    }

    static fromTraveler(traveler) {
        let newTraveler = new Traveler(traveler.travelerId)
        newTraveler.dateOfBirth = traveler.dateOfBirth
        newTraveler.gender = traveler.gender
        return newTraveler
    }
}