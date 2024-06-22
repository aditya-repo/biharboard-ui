import React, { useState } from 'react'
const URL = 'http://localhost:4040/'

const SchoolInputForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    const formSubmit = async (e)=>{
        e.preventDefault()
        console.log(formData);

        const response = await fetch(`${URL}school`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          console.log(response);
    }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

    return (

        <form class="mx-5" onSubmit={formSubmit}>

            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">New College +</h2>

                <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="schoolcode" class="block text-sm font-medium leading-6 text-gray-900">School Code</label>
                        <div class="mt-2">
                            <input type="text" name="schoolcode" id="schoolcode"  onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="schoolname" class="block text-sm font-medium leading-6 text-gray-900">School Name</label>
                        <div class="mt-2">
                            <input type="text" name="schoolname" id="schoolname" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="principal" class="block text-sm font-medium leading-6 text-gray-900">Principal</label>
                        <div class="mt-2">
                            <input type="text" name="principal" id="principal"  onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="village" class="block text-sm font-medium leading-6 text-gray-900">Village</label>
                        <div class="mt-2">
                            <input type="text" name="village" id="village" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="block" class="block text-sm font-medium leading-6 text-gray-900">Block</label>
                        <div class="mt-2">
                            <input id="block" name="block" type="block" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="pincode" class="block text-sm font-medium leading-6 text-gray-900">Pincode</label>
                        <div class="mt-2">
                            <input id="pincode" name="pincode" type="pincode" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="mobile1" class="block text-sm font-medium leading-6 text-gray-900">Mobile 1</label>
                        <div class="mt-2">
                            <input id="mobile1" name="mobile1" type="mobile1" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="mobile2" class="block text-sm font-medium leading-6 text-gray-900">Mobile 2</label>
                        <div class="mt-2">
                            <input id="mobile2" name="mobile2" type="mobile2" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                    <div className='flex justify-center mt-5'>
                        <button type="submit" class="text-white bg-blue-700 px-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
            </div>
        </form>


    )

}

export default SchoolInputForm