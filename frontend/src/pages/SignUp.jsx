import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API } from "../utils/constants.js";

const SignUp = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/register`, signupInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        console.log(res.data);
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>New Users Kindly SignUp👇</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, name: e.target.value })
                  }
                  placeholder="John Doe"
                />
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, email: e.target.value })
                  }
                  placeholder="test@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, password: e.target.value })
                  }
                  placeholder="test@123"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <span className="ml-8 mb-0">
          <p className="">
            Already Have a account Kindly ➡️ <Link to="/login">Log In</Link>
          </p>
        </span>
        <CardFooter className="flex items-center justify-center">
          <Button
            onClick={registerHandler}
            type="button"
            className="w-full hover:bg-stone-700"
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
