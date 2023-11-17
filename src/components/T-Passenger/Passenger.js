import {useVuelidate} from '@vuelidate/core'
import {required, minLength } from '@vuelidate/validators'

export default class Traveler {

    constructor(id, type) {
        this.id = id
        this.type = type
        this.firstName = ''
        this.lastName = ''
        this.dateOfBirth = null
        this.gender = null
        this.email = ''
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
                'firstName': this.firstName,
                'lastName': this.lastName
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
}