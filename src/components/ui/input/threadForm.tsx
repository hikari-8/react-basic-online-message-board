import React, { FormEventHandler } from "react";

type InputAreaProps = {
  buttonName: string
  placeholderText: string
  onSubmitFunc: FormEventHandler<HTMLFormElement>
  onChangeFunc: React.ChangeEventHandler<HTMLInputElement>
}

export const ThreadForm:React.FC<InputAreaProps> =({buttonName, placeholderText, onSubmitFunc, onChangeFunc})=> {
  return (
      <form className="w-1/2 mx-auto" onSubmit={onSubmitFunc}>   
          <div className="relative">
              <input onChange={onChangeFunc} type="search" id="default-search" className="p-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder={placeholderText} required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-2">{buttonName}</button>
          </div>
      </form>
  )
}