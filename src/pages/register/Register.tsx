import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import FieldSet from "@/components/ui/form/FieldSet";
import Field from "@/components/ui/form/Field";
import Logo from "@/components/ui/Logo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./register.css";
import toast from "react-hot-toast";
import FormSubmitBtn from "@/components/ui/form/FormSubmitBtn";
import { useRegisterCustomerMutation } from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { TUser } from "@/types/user.type"; // Make sure to import the correct type definition
import DesignToken from "@/lib/providers/antDesign/DesignToken";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";
import { user_role } from "@/constants/userType";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerCustomer, { status }] = useRegisterCustomerMutation();

  const currentUser = useAppSelector(selectCurrentUser);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TUser & { confirmPassword: any }>(); // Add type parameter to useForm

  const navigate = useNavigate();
  const togglePass = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = async (formData: TUser & { confirmPassword: any }) => {
    try {
      const user: TUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: "user",
        password: formData.password,
        isBlocked: false,
        isDeleted: false,
      };
      console.log(formData, user);
      
      // Make the API call
      const result = await registerCustomer(user).unwrap();
      if (result) {
        toast.success("Registration successful!");
        reset(); // Reset the form on successful submission
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error: any) {
      console.error(error);
      if (
        error?.data?.message.includes("email") &&
        error?.data?.message.includes("duplicate")
      ) {
        toast.error("A user with this email already exists!");
      }
    }
  };

  // Watch the password field to compare with confirmPassword
  const password = watch("password");
  const handlePhoneChange = (value: string) => {
    setValue("phone", value); // Set the phone number value in the form
  };

  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <main
        className="!overflow-hidden flex items-center justify-center mx-auto my-auto p-6"
        style={{ backgroundColor: DesignToken().headerBg }}
      >
        <div
          className="w-[480px] py-5 md:py-0 mt-7 border rounded-xl shadow-sm"
          style={{
            backgroundColor: DesignToken().secondaryExtraLight,
            borderColor: DesignToken().colorBorder,
          }}
        >
          <div className="content-center h-full rounded-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="sm:p-7 flex flex-col">
              <div className="flex flex-col text-center text-text space-y-4">
                <Logo className="w-[180px] mx-auto mb-10"></Logo>
                <Title className="block !text-2xl text-center mt-6 font-bold dark:text-white text-primary">
                  Sign up
                </Title>
              </div>
              <div className="mt-5">
                <div className="flex justify-center gap-x-5 my-4">
                  <FcGoogle size={48} className="border rounded py-3 w-20" />
                  <BsFacebook
                    size={48}
                    className="w-20 border text-white bg-blue-600 rounded p-3"
                  />
                </div>
                <Typography.Text className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </Typography.Text>
                {/* Form */}
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="text-center"
                >
                  <div className="grid grid-cols-1 gap-0">
                    {/* ======== Name =========== */}
                    <FieldSet>
                      <Field label="Full Name" error={errors.name}>
                        <input
                          {...register("name", {
                            required: "Name is required.",
                          })}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          className={`py-3 px-4 block w-full border-2 ${
                            errors?.name ? "outline-red-500 border-red-300" : ""
                          } focus:outline-primary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                          style={{
                            backgroundColor: DesignToken().colorBgContainer,
                            borderColor: DesignToken().colorBorder,
                            color: DesignToken().colorText,
                          }}
                          aria-describedby="name-error"
                        />
                      </Field>
                    </FieldSet>
                    {/* ======== Name =========== */}

                    {/* ======== Email =========== */}
                    <FieldSet>
                      <Field label="Email" error={errors.email}>
                        <input
                          {...register("email", {
                            required: "Email is required.",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Please enter a valid email address.",
                            },
                          })}
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                          className={`py-3 px-4 block w-full border-2 ${
                            errors?.email
                              ? "outline-red-500 border-red-300"
                              : ""
                          } focus:outline-primary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                          style={{
                            backgroundColor: DesignToken().colorBgContainer,
                            borderColor: DesignToken().colorBorder,
                            color: DesignToken().colorText,
                          }}
                          aria-describedby="email-error"
                        />
                      </Field>
                    </FieldSet>
                    {/* ======== Email =========== */}

                    {/* ======== Phone =========== */}

                    <FieldSet>
                      <Field label="Phone" error={errors.phone}>
                        <PhoneInput
                          {...register("phone", {
                            required: "Phone number is required.",
                          })}
                          value={watch("phone")}
                          placeholder="Your phone number"
                          country={"bd"}
                          enableSearch={true}
                          onChange={handlePhoneChange} // Update the form value on change
                          className={`flex justify-between items-center py-1 w-full border-2 ${
                            errors?.phone
                              ? "outline-red-500 border-red-300"
                              : ""
                          } focus:outline-primary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                          style={{
                            backgroundColor: DesignToken().colorBgContainer,
                            borderColor: DesignToken().colorBorder,
                            color: DesignToken().colorText,
                          }}
                          aria-describedby="phone-error"
                        />
                      </Field>
                    </FieldSet>
                    {/* ======== Phone =========== */}

                    <div className="w-full col-span-full grid grid-cols-[repeat(auto-fit,_minmax(48%,_1fr))] gap-2">
                      {/* ======== Password =========== */}
                      <FieldSet>
                        <Field label="Password" error={errors.password}>
                          <div
                            className="relative w-full"
                            style={{ color: DesignToken().colorText }}
                          >
                            <input
                              {...register("password", {
                                required: "Password is required.",
                                minLength: {
                                  value: 8,
                                  message:
                                    "Password must be at least 8 characters.",
                                },
                              })}
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              placeholder="Your password"
                              className={`py-3 px-4 block !w-full border-2 ${
                                errors?.password
                                  ? "outline-red-500 border-red-300"
                                  : ""
                              } focus:outline-primary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                              style={{
                                backgroundColor: DesignToken().colorBgContainer,
                                borderColor: DesignToken().colorBorder,
                                color: DesignToken().colorText,
                              }}
                              aria-describedby="password-error"
                            />
                            <div
                              onClick={togglePass}
                              className="cursor-pointer absolute top-3 end-3"
                            >
                              {showPassword ? (
                                <FiEyeOff size={20} />
                              ) : (
                                <FiEye size={20} />
                              )}
                            </div>
                          </div>
                        </Field>
                      </FieldSet>
                      {/* ======== Password =========== */}

                      {/* ======== Confirm Password =========== */}
                      <FieldSet>
                        <Field
                          label="Confirm Password"
                          error={
                            errors.confirmPassword && {
                              message:
                                password !== watch("confirmPassword")
                                  ? "Passwords do not match."
                                  : undefined,
                            }
                          }
                        >
                          <div
                            className="relative w-full"
                            style={{ color: DesignToken().colorText }}
                          >
                            <input
                              {...register("confirmPassword", {
                                required: "Please confirm your password.",
                                validate: (value) =>
                                  value === password ||
                                  "Passwords do not match.",
                              })}
                              type={showPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Your password"
                              className={`py-3 px-4 block !w-full border-2 ${
                                errors?.confirmPassword
                                  ? "outline-red-500 border-red-300"
                                  : ""
                              } focus:outline-primary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                              style={{
                                backgroundColor: DesignToken().colorBgContainer,
                                borderColor: DesignToken().colorBorder,
                                color: DesignToken().colorText,
                              }}
                              aria-describedby="confirmPassword-error"
                            />
                            <div
                              onClick={togglePass}
                              className="cursor-pointer absolute top-3 end-3"
                            >
                              {showPassword ? (
                                <FiEyeOff size={20} />
                              ) : (
                                <FiEye size={20} />
                              )}
                            </div>
                          </div>
                        </Field>
                      </FieldSet>
                      {/* ======== Confirm Password =========== */}
                    </div>
                  </div>
                  {/* End Grid */}
                  <FormSubmitBtn
                    text="Sign up"
                    isLoading={status === "pending" ? true : false}
                    className="align-middle mb-5"
                  />

                  <Typography.Text className="mt-6 text-base font-medium">
                    Already have an account?{" "}
                    <NavLink
                      to="/login"
                      className="font-medium text-primary dark:text-primary-light"
                    >
                      Login
                    </NavLink>
                  </Typography.Text>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Register;
