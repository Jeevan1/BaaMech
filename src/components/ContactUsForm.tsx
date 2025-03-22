import { useState } from 'react';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmissionStatus({
        success: true,
        message: 'Your message has been sent successfully!',
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } else {
      setSubmissionStatus({
        success: false,
        message: 'Please correct the errors in the form.',
      });
    }
  };

  return (
    <div className="w-full">
      {submissionStatus.success !== null && (
        <div
          className={` rounded p-4 ${
            submissionStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submissionStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="">
            <label
              htmlFor="name"
              className="text-md block pb-2 font-medium text-accent uppercase"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 block h-auto w-full rounded-md border border-gray-400 px-4 py-2 text-accent placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none md:h-12"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div className="">
            <label
              htmlFor="phone"
              className="text-md block pb-2 font-medium text-accent uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Enter your phone number..."
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1 block h-auto w-full rounded-md border border-gray-400 px-4 py-2 text-accent placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none md:h-12"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-md block pb-2 font-medium text-accent uppercase"
            >
              Email
            </label>
            <div className="relative mt-1">
              <input
                id="email"
                placeholder="Enter your email..."
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="block h-auto w-full rounded-md border border-gray-400 pl-12 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none md:h-12"
              />
              <svg
                className="absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-md block pb-2 font-medium text-accent uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 block h-auto w-full rounded-md border border-gray-400 px-4 py-2 text-accent placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              rows={4}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 w-48 cursor-pointer rounded-md bg-accent px-4 py-3 font-bold text-white transition-all duration-200 hover:bg-primary"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
