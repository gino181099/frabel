"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SignupFormDemo() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const data = {
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      message: e.target.message.value,
      fax: e.target.fax.value, // El campo trampa
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section className="w-full h-full py-20" id="contacto">
      <h2
        className="max-w-7xl pl-4 pb-6 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Contacto.
      </h2>
      <p
        className="max-w-7xl pl-4 mx-auto ">
        Completá el formulario o escribinos directamente por <a href="https://wa.link/8bsz7n" target="_blank" className="text-green-400 cursor-pointer">WhatsApp</a> y te respondemos a la brevedad. 
      </p>
    <div
      className="shadow-input max-w-7xl pl-4 pb-6 mx-auto rounded-none  md:rounded-2xl md:p-8 dark:bg-black">
        
      
      <form className="max-w-md " onSubmit={handleSubmit}>
        <div
          className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 pt-8">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre de la persona o empresa</Label>
            <Input id="firstname" placeholder="Nombre" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" type="email" />
        </LabelInputContainer>
         <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Mensaje</Label>
            <Input id="message" placeholder="Mensaje" type="text" />
          </LabelInputContainer>

          {/* --- HONEYPOT FIELD (Invisible para el usuario) --- */}
      <input type="text" name="fax" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
{status === "success" || status === "error" ? "" :
        <button
          className={"group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white disabled:opacity-50 cursor-pointer"}
          type="submit">
          {status === "loading" ? "Enviando..." : "Enviar →"}
        </button>}

        {status === "success" && <p className="text-green-400 mt-2 text-sm">¡Mensaje enviado correctamente!</p>}
      {status === "error" && <p className="text-red-400 mt-2 text-sm">Hubo un error, intenta de nuevo.</p>}

        <div
          className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

       
      </form>
    </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
