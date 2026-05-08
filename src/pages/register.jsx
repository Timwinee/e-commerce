import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils/Index";
import { toast } from "sonner";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  
  try {
    const response = await customFetch.post('/auth/local/register', data)
    console.log(response);
    
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    // console.log(error);
    const errorMessage = error?.response?.data?.error?.message || 'please check your credintial'
    toast.error(errorMessage)
  }
};

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8  bg-base-100 shadow-lg flex flex-col gap-y-6"
      >
        <h4 className="text-center text-3xl font-bold">Register </h4>
        <FormInput
          type={"text"}
          label={"username"}
          name={"username"}
          defaultValue={"USER"}
        />
        <FormInput
          type={"email"}
          label={"email"}
          name={"email"}
          defaultValue={"user123@gmail.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          defaultValue={"secret"}
        />
        {/* <Form /> */}
        <SubmitBtn />
        <p className="text-center">
          Already a member ?{" "}
          <Link to={"/login"} className="ml-2 btn btn-secondary capitalize">
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}
