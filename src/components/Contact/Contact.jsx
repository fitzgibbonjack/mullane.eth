import "./Contact.scss";
import "../Button/Button.scss";

export default function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData(e.currentTarget);
		e.currentTarget.reset();

		// send form data to endpoint
		fetch("https://getform.io/f/1725bee0-1904-4ab0-9ddb-77b4d9ce1876", {
			method: "POST",
			body: formData,
		})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	return (
		<section className="contact" id="contact">
			<div className="container">
				<h2 className="contact__title">&#128232; - Let's Connect!</h2>
				<p className="contact__text">
					Feel free to reach out if you're interested in working
					together or just want a chat.
				</p>

				<form onSubmit={handleSubmit} id="form">
					<div className="input">
						<input
							type="text"
							id="name"
							name="name"
							className="form__input"
							placeholder=" "
							required="required"
						/>
						<label htmlFor="name" className="form__label">
							Name
						</label>
					</div>

					<div className="input">
						<input
							type="email"
							id="email"
							name="email"
							className="form__input"
							placeholder=" "
							required="required"
						/>
						<label htmlFor="email" className="form__label">
							Email
						</label>
					</div>

					<div className="input">
						<textarea
							type="text"
							id="message"
							name="message"
							className="form__input"
							rows="6"
							placeholder=" "
							required="required"
							style={{ resize: "none" }}
						/>
						<label htmlFor="message" className="form__label">
							Message
						</label>
					</div>

					<button className="button--primary" type="submit">
						Send
					</button>
				</form>
			</div>
		</section>
	);
}
