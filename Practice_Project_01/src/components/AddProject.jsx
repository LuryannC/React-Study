import { Fragment, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({onAddProject, onCancelAddProject}) {

  const modal = useRef();

   const title = useRef();
   const description = useRef();
   const dueDate = useRef();

   function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '')
    {
      modal.current.open();
      return;
    }

    onAddProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
    });
   }

  return (
    <Fragment>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
        <p className='text-stone-600 mb-4'>Please make sure you provida a valida value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
          <menu className="flex items-center justify-end gap-4 my-4">
              <li><button onClick={onCancelAddProject} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
              <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
          </menu>
          <div>
              <Input type="text" ref={title} label="Title" />
              <Input ref={description} label="Description" isTextArea />
              <Input type="date" ref={dueDate} label="Due Date" />
          </div>
      </div>
    </Fragment>
  );
}

{/* <section className="">
<div className="flex justify-end gap-1 text-2xl">
    <button onClick={()=>handleButtonClick(false)} className="hover:bg-stone-300 py-2 px-4 rounded-md inline-flex items-center">Cancel</button>
    <button onClick={()=>handleButtonClick(true)} className="bg-black text-stone-50 hover:bg-stone-600 py-2 px-4 rounded-md inline-flex items-center">Save</button>
</div>


<div className="text-xl">
<label className="uppercase font-bold text-stone-500 row-span-1">
  Title
</label>
<p>
  <input type="text" className="bg-stone-300 w-full" />
</p>
<label className="uppercase font-bold text-stone-500 row-span-1">
  Description
</label>
<p>
  <textarea type="text" className="bg-stone-300 w-full" />
</p>
<label className="uppercase font-bold text-stone-500 row-span-1">
  Due Date
</label>
<p>
  <input type="date" className="bg-stone-300 w-full" />
</p>
</div>
</section> */}
