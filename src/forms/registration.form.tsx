import { Form } from "@heroui/form"
import { Input } from "@heroui/input";
import { useState } from "react";



const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);

		onClose();
	}

	return (
		<Form className="w-full" onSubmit={handleSubmit}>
			<Input
				aria-label="Email"
				isRequired
				name="email"
				placeholder="Введите email"
				type="email"
				value={formData.email}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none"
				}}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				validate={(value) => {
					if (!value) return "Почта обязательна";
					if (!validateEmail(value)) return "Некорректный email";
					return null;
				}}
			/>

		</Form>
	)
}