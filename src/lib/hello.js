export function getHelloMessage() {
	//Here can be any logic, like fetching from DB or external API
	return { message: 'Hello, from shared moodule!' };
}

export function createHelloGreeting(name) {
	return { message: `Hello ${name} from shared module` };
}
