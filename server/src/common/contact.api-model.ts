export class ContactApiModel {
    /**
     * Model for a contact submission
     * @param name Name of the customer
     * @param email Email address of the customer
     * @param message The message content
     * @param company Company the customer is working for (optional)
     * @param lang The language the customer uses on his client (used for the email confirmation)
     */
    constructor(public name = "", public company = "", public email = "", public message = "", public lang = "en") {}
}
