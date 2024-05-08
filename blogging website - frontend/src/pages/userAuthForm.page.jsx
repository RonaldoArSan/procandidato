import React from "react";

import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import {NavLink} from 'react-router-dom'
import AnimationWrapper from "../common/page-animation";

export default function UserAuthForm({ type }) {
  return (
    <AnimationWrapper
    keyValue={type}
    >
         <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px] items-center">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type === "sign-in" ? "Bem vindo de Volta" : "Cadastre Agora"}
        </h1>
        {type != "sign-in" ? (
          <InputBox
            name="fullname"
            type="text"
            placeholder="Nome Completo"
            icon="fi-rs-circle-user"
          />
        ) : (
          ""
        )}

        <InputBox
          name="email"
          type="text"
          placeholder="Seu email"
          icon="fi fi-bs-at"
        />

        <InputBox
          name="password"
          type="password"
          placeholder="Senha"
          icon="fi-rs-key"
        />

        <button className="btn-dark center mt-14" type="submit">
          {type.replace("-", "")}
        </button>
        <div
          className="relative w-full flex items-center gap-2 
                my-10 opacity-10 uppercase text-black font-bold"
        >
          <hr className="w-1/2 border-black" />
          <p> Ou</p>
          <hr className="w-1/2 border-black" />
        </div>

        <button className="btn-dark flex justify-center items-center gap-4 w-[90%] center">
          <img src={googleIcon} alt="icone do Google" className="w-5 " />
          continue com google
        </button>

        {type === "sign-in" ? (
          <p className="mt-6 text-dark-grey text-xl text-center">
            Ainda não tem conta? 
            <NavLink
              to="/signup"
              className="underline text-black text-xl ml-1"
              
            >
                Junte-se a Nós
            </NavLink>
          </p>
        ) : (
          <p className="mt-6 text-dark-grey text-xl text-center">
            Ja tem uma conta?
            <NavLink
              to="/signin"
              className="underline text-black text-xl ml-1"
            >
               Acesse aqui.                 
            </NavLink>
          </p>
        )}
      </form>
    </section>
    </AnimationWrapper>
   
  );
}
