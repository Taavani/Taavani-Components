export default class Traveler {

    constructor(id, type) {
        this.id = id
        this.type = type
        this.firstName = ''
        this.lastName = ''
        this.dateOfBirth = null
        this.gender = null
        this.email = ''
        this.phone = null
    }

    isTravelerValid() {
        // Adults
        if (this.type === 'ADULT'
            && this.firstName.length > 2
            && this.lastName.length > 2
            && this.email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            return true
        }
        // Infants and seated_infants
        // FirstName and LastName are alw

        return false
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