class Customer {
    #balance = 20; // Private field

    #create() {
        console.log("I am creating myself");
    }

    createSelf() {
        this.#create(); // Invokes the private method
    }

    setBalance(balance) {
        if (typeof balance === "number") {
            this.#balance = balance;
        } else {
            throw new Error('The provided value is not valid');
        }
    }

    getBalance() {
        console.log(this.#balance);
    }
}


const customer = new Customer();
customer.createSelf(); // Outputs: "I am creating myself"
customer.getBalance(); // Outputs: 20

customer.setBalance(50);
customer.getBalance(); // Outputs: 50
