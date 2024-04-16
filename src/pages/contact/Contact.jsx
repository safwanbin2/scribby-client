import React from "react";
import contact from "../../assets/contact.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleContact = async (data) => {
    console.log("data", data);
    const { name, email, message } = data;
    try {
      const response = await fetch(
        "https://server-khaki-kappa.vercel.app/api/cribby/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
        alert("Email sent successfully");
        // Handle success, maybe show a success message to the user
      } else {
        console.error("Failed to send email");
        alert("Failed to send email");
        // Handle error, maybe show an error message to the user
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
      // Handle error, maybe show an error message to the user
    }
  };
  return (
    <div className="w-full py-20 ">
      <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col-reverse md:grid grid-cols-2 justify-center items-center ">
        <div className="space-y-5">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-6xl hero-title font-semibold bg-gradient-to-r from-secondary to-primary">
              Get in touch with us
            </h2>
            <p className="text-xl ">
              Airbnb is a global online marketplace that connects travelers
              seeking unique accommodations.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleContact)}
            className="grid grid-cols-1 mb-2 gap-2"
          >
            <div className="form-control">
              <label className="label ps-0">
                <span className="">Your Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Provide a Name",
                })}
                type="text"
                placeholder="example: john doe"
                className="border rounded-full focus:outline-none py-2 px-4 w-full bg-transparent"
              />
              {errors.name && (
                <label className="label text-red-400 text-xs ps-0">
                  <span className="">{errors.name.message}</span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label ps-0">
                <span className="">Your Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Provide an email",
                })}
                type="email"
                placeholder="example@gmail.com"
                className="border rounded-full focus:outline-none py-2 px-4 w-full bg-transparent"
              />
              {errors.email && (
                <label className="label text-red-400 text-xs ps-0">
                  <span className="">{errors.email.message}</span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label ps-0">
                <span className="">Message</span>
              </label>
              <textarea
                {...register("message", {
                  required: "Provide an Message",
                })}
                type="text"
                placeholder="Message"
                className="border rounded-lg focus:outline-none py-2 px-4 w-full h-32 bg-transparent"
              />
              {errors.message && (
                <label className="label text-red-400 text-xs ps-0">
                  <span className="">{errors.message.message}</span>
                </label>
              )}
            </div>
            <div>
              <button className="p-btn rounded-full">Submit</button>
            </div>
          </form>
        </div>
        <Lottie className="md:h-screen " animationData={contact} />
      </div>
    </div>
  );
};

export default Contact;
