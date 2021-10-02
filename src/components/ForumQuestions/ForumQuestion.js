import React from "react";
import { OptionsForumQuestions } from "./OptionsForumQuestions";
import "./ForumQuestion.css"

export const ForumQuestion = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <h1 className="titulo__Secundarios">Frequenlty Asked</h1>
      <p className="parrafo__Principal m-0-auto w-50">
        Here are some of our FAQs. If you have any other question you'd like
        answered please feel free to email us.
      </p>
      <OptionsForumQuestions />

      <button className="mt-4 btn btn__PurpleLight">More Info</button>
    </div>
  );
};
