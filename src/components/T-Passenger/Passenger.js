import {useVuelidate} from '@vuelidate/core'
import {required, minLength } from '@vuelidate/validators'

export default class Traveler {

    constructor(id) {
        this.id = id
        this.name = {
            firstName: '',
            lastName: ''
        }
        this.dateOfBirth = null
        this.gender = null
        this.contact = {
            emailAddress: ''
        }
        this.phone = ''
    }

    toJson() {
        // Split country code
        let phoneNumberArray = this.phone.split(' ')
        let countryCode = phoneNumberArray[0].replace('+','')
        phoneNumberArray.shift()

        // Merge phone number
        let phoneNumber = phoneNumberArray.join('')

        return {
            'id': this.id,
            'dateOfBirth': this.dateOfBirth,
            'name': {
                'firstName': this.name.firstName,
                'lastName': this.name.lastName
            },
            'gender': this.gender,
            'contact': {
                'emailAddress': this.email,
                'phones': [
                    {
                        "deviceType": "MOBILE",
                        "countryCallingCode": countryCode,
                        "number": phoneNumber
                    }
                ]
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