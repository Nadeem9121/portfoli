// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     location: "",
//     budget: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const WEB_APP_URL =
//     "https://script.google.com/macros/s/AKfycbwBfvtBdSmXUjegn9645U6lu9lBHgD0TNPdjlcqA6XwZr5yST_XjcAGJ6WjXjMKeJVMNw/exec";

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const query = new URLSearchParams(formData).toString();
//       const response = await fetch(`${WEB_APP_URL}?${query}`);

//       const result = await response.json();

//       if (result.status === "success") {
//         toast.success("✅ Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           location: "",
//           budget: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         toast.error("⚠️ Failed to send. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("❌ Something went wrong! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const commonClass =
//     "input input-lg border-0 border-b-2 focus:outline-none placeholder:text-[15px] md:placeholder:text-lg focus:border-blue-500 border-[#E6E8EB] w-full rounded-none px-0";

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name*"
//           className={commonClass}
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email*"
//           className={commonClass}
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location*"
//           className={commonClass}
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="budget"
//           placeholder="Budget*"
//           className={commonClass}
//           value={formData.budget}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject*"
//           className={commonClass}
//           value={formData.subject}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="Message*"
//           className={commonClass}
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="btn btn-primary mt-4 px-4 py-2 disabled:opacity-50"
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>
//       </form>

//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         pauseOnHover
//         draggable
//         theme="dark"
//       />
//     </div>
//   );
// };

// export default Form;
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // Google Apps Script URL (replace with your own)
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyRaxuHIaZed-aL5_KdbOJVB03vjKD_w4f0Q6LaAE_5cDcMlH8QQFzLq6h3_I0EXpHXzg/exec";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData object
      const formPayload = new FormData();

      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      // Append timestamp to avoid caching
      formPayload.append("timestamp", new Date().toISOString());

      // Send to Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        body: formPayload,
      });

      // With 'no-cors', we can't read the response but request is sent
      // Assume success if no network error
      toast.success("🎉 Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);

      // Provide specific error messages
      if (!navigator.onLine) {
        toast.error("📶 No internet connection. Please check your network.");
      } else {
        toast.error("⚠️ Could not send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Input styling
  const inputClass = `
    w-full px-4 py-3 
    bg-white border border-gray-300 rounded-lg
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition duration-200
    placeholder:text-gray-400
  `;

  const textareaClass = `
    ${inputClass} 
    min-h-[120px] resize-none
  `;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Get in Touch</h2>
        <p className="text-gray-600">
          Fill out the form below and I'll respond as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Location *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
            placeholder="City, Country"
            required
          />
        </div>

        {/* Budget & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Budget *
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select budget range</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
              <option value="To be discussed">To be discussed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select a subject</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Partnership Opportunity">
                Partnership Opportunity
              </option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={textareaClass}
            placeholder="Tell me about your project..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 px-6 rounded-lg font-medium text-white
              bg-blue-600 hover:bg-blue-700 active:bg-blue-800
              disabled:opacity-50 disabled:cursor-not-allowed
              transition duration-200 transform hover:scale-[1.02]
              flex items-center justify-center
            `}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Form Note */}
        <p className="text-sm text-gray-500 text-center pt-4">
          * Required fields. I typically respond within 24 hours.
        </p>
      </form>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactForm;
