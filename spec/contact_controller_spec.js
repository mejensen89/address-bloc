const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", ()=>{
	beforeEach((done)=> {
		this.book = new ContactController();

		sequelize.sync({force: true}).then((res) => {
			done();
		})
		.catch((err)=> {
			done();
		});
	});

	it("should be defined", ()=> {
		expect(ContactController).toBeDefined();
	});

	describe("#addContact()", ()=> {
		it("Should add a single contact into the book", ()=>{
			expect(this.book.contacts.length).toBe(0);
			this.book.addContact("ALice", "001-101-1010");
			expect(this.book.contacts.length).toBe(1);
		});
	});

});

