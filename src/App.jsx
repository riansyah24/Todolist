import { useState } from 'react'
import List from "./components/List.jsx"

const App = () => {
  let [lists,setLists] = useState([])
  
  const submit = (formData) => {
    const input = formData.get("input")
    setLists([...lists,input])
  }
  return (
    <>
      <div className="p-3">
        <form className="flex flex-col gap-3" action={submit}>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0" placeholder="Todo" required name="input"/>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      <div className="p-3">
        <ul className="flex flex-col gap-3">
          {
            lists.map((data,i) => <List list={data} key={i} remove={() => setLists(lists.filter(remove => data != remove))}/>)
          }
        </ul>
      </div>
    </>
  )
}

export default App