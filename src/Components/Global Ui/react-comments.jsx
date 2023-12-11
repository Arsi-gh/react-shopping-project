import { UserIcon } from "@heroicons/react/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const question = {
  id: 1,
  title: "lorem",
  comment: "Lorem lorem lorem",
  answers: [
    { id: 1, text: "lorem lorem lorem lorem oskol" },
    { id: 2, text: "lorem lorem lorem lorem oskol" },
  ],
};

export default function ReactComments() {
  return (
    <div className="flex flex-col m-[1rem] mx-auto gap-[1rem] my-[2rem]">
      {question && (
        <div className="flex flex-col w-full bg-zinc-100 rounded-lg relative p-2 text-neutral-800 shadow-customeTwo">
          <div className="flex items-center gap-2 gap-x-4">
            <UserIcon className="w-[2rem] p-1 rounded-full bg-slate-200"/>
            <h3 className="flex-1">Arsalan ghoochani</h3>
            <button className="flex gap-2 items-center p-1 px-2 bg-gray-300 rounded-lg"><ArrowUturnLeftIcon className="w-5"/> answer</button>
          </div>
          <span className="w-full my-2 h-[2px] bg-zinc-200"></span>
          <p>
            Text : {question.title} - {question.comment}
          </p>
          {question.answers && (
            <span className="w-20 h-10 border-l-[2px] border-b-[2px] border-gray-300 absolute left-4 -bottom-10"></span>
          )}
        </div>
      )}
      {question.answers.map((data) => {
        return (
          <div key={data.id} className="flex flex-col ml-8 w-[95%]  bg-slate-50 rounded-lg relative p-3 text-neutral-800 shadow-customeTwo">
            <div className="flex items-center gap-2 gap-x-4">
              <UserIcon className="w-[2rem] p-1 rounded-full bg-slate-200"/>
              <h3>Arsalan ghoochani</h3>
            </div>
            <span className="w-full my-2 h-[2px] bg-zinc-200"></span>
            <p>{data.text}</p>
            {data.id == question.answers.length ? null : (
              <span className="w-[0.1rem] h-[2rem] bg-gray-300 absolute left-4 -bottom-8"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}