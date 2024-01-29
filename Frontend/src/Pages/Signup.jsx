import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";

const Signup = () => {
  const [formData, setFormData] = React.useState({});
  const [errorMessages, setErrorMessages] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessages("Please fill all the fields");
    }
    try {
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessages(data.messages);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessages(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white">
              BLUEACE'S
            </span>{" "}
            Blog
          </Link>
          <p className="test-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur{" "}
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handelChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handelChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handelChange}
              ></TextInput>
            </div>
            <Button
              gradientDuoTone={"purpleToBlue"}
              pill
              type="submit"
              disabled={loading}
            >
              {loading ? <Spinner color="white" size="sm" /> : "Signup"}
            </Button>
            <GoogleAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessages && (
            <Alert className="mt-5" color="failure">
              {errorMessages}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
