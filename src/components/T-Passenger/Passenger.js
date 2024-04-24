import {useVuelidate} from '@vuelidate/core'
import {required, minLength } from '@vuelidate/validators'

export default class Traveler {

    constructor(id) {
        this.travelerId = id
        this.name = {
            firstName: '',
            lastName: ''
        }
        this.dateOfBirth = null
        this.gender = null
        this.contact = {
            emailAddress: '',
            phones: []
        }
        this.valid = false
    }

    toJson() {
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
                'phones': this.contact.phones.map(phone => {
                    return {
                        'deviceType': phone.deviceType,
                        'countryCallingCode': phone.countryCallingCode,
                        'number': phone.number
                    }
                })
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