/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import contact from '../../assets/contact1.png'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { motion } from 'motion/react';
import { IoLocationSharp, IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        toast.success("Form submitted successfully!");
        console.log(data);
        reset();
      };

    return (
         <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.5,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        className="w-full mx-auto ">
            <Helmet>
                  <title>Rajib | Contact</title>
                
                </Helmet>
                <ToastContainer />
            <div className="text-center ">
                <h3 className="text-5xl font-semibold text-slate-100">Contact​</h3>
                <p className="text-slate-100 mt-3 mb-10 text-[20px] font-normal"> Let is Talk About Ideas​</p>
                 </div>
<div className="w-11/12 mx-auto flex justify-between space-x-6 max-sm:flex-col-reverse">
        <div className="md:w-1/2 max-sm:mt-4">
            <div>
                <img src={contact} className="rounded-xl w-full h-full object-cover " alt=""  />
                <h1 className="text-3xl font-semibold font-poppins text-slate-100 mt-4">Rajib Raj</h1>
                <p className="text-xl font-semibold text-slate-100 mt-2 mb-2">Front-End Developer</p>
                <p className="text-slate-100 ">Are You Looking For Your Business Online Presence?
               </p>
               <p className="text-slate-100"> I am here. 🙂</p>
            </div>
            <div className="flex justify-between max-sm:flex-col max-sm:items-start items-center mb-14 mt-6">
                <div className="flex gap-4 items-center justify-between">
                <IoLocationSharp className="w-8 h-8 text-[#F8B90C]" />
                    <div>
                        <p className="text-xl text-slate-50 font-medium">Address</p>
                        <p className="text-sm text-slate-50">Dhaka Bangladesh</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center ">
               
                <FaPhone className="w-8 h-8 text-[#F8B90C]" />
                    <div>
                        <p className="text-xl text-slate-50 font-medium">Phone</p>
                        <p className="text-sm text-slate-50"> 01759366647</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                <MdOutlineMail className="w-8 h-8 text-[#F8B90C]" />
                    <div>
                        <p className="text-xl text-slate-50 font-medium">Email</p>
                        <p className="text-sm text-slate-50">rajib635356@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 ">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "green" },
              "&.Mui-focused fieldset": { borderColor: "grey" },
              "& input": { color: "grey" },
            },
            "& .MuiInputLabel-root": { color: "green" },
            "& .MuiInputLabel-root.Mui-focused": { color: "grey" },
          }}
        />

        <TextField
          label="example@mail.com"
          variant="outlined"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "green" },
              "&.Mui-focused fieldset": { borderColor: "grey" },
              "& input": { color: "grey" },
            },
            "& .MuiInputLabel-root": { color: "green" },
            "& .MuiInputLabel-root.Mui-focused": { color: "grey" },
          }}
        />

        <TextField
          label="Write your message"
          variant="outlined"
          fullWidth
          rows={4}
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "green" },
               "&.Mui-focused fieldset": { borderColor: "grey" },
              "& input": { color: "grey" },
              height: "80px",
            },
            "& .MuiInputLabel-root": { color: "green" },
            "& .MuiInputLabel-root.Mui-focused": { color: "grey" },
          }}
        />


        <Button type="submit" variant="contained" color="success" >
          Submit
        </Button>
      </form>
    </div>
       </div>
        </motion.div>    
    );
};

export default Contact;