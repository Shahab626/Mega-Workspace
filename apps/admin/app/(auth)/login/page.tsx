"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@repo/ui/Input";
import { Button } from "@repo/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";

const Errors = {
  EMAIL: "Email is a required field.",
  PASSWORD: "Password is a required field.",
};

const schema = z.object({
  email: z
    .string({ required_error: Errors.EMAIL })
    .email({ message: Errors.EMAIL }),
  password: z
    .string({ required_error: Errors.PASSWORD })
    .min(1, { message: Errors.PASSWORD }),
});

type ILoginSchema = z.infer<typeof schema>;

const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILoginSchema>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="max-w-lg">
      <h2 className="text-2xl">Login!</h2>
      <form
        onSubmit={handleSubmit((formData) => {
          const { email, password } = formData;
          console.debug({ email, password });
        })}
        className="flex flex-col gap-4"
      >
        <Input
          {...register("email")}
          // error={errors.email?.message}
          label="Email"
          type="email"
          placeholder="i.e. john.doe@example.com"
        />
        <Input
          {...register("password")}
          // error={errors.password?.message}
          label="Password"
          type="password"
          placeholder="i.e. &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />
        <div className="self-center">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
