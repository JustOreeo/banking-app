import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { createAccountFields } from '../constants/formFields';

const fields = createAccountFields;
let fieldsState = {};
fields.forEach(field  => fieldsState[field.id] = '');

const CreateAccount = () => {
    const navigate = useNavigate();
    const [ createAccountState, setCreateAccountState ] = useState(fieldsState);
    const userHistory = JSON.parse(localStorage.getItem('users'))
    if (userHistory === null){
        localStorage.setItem('users', JSON.stringify([]))
    }

    // Automatically handle the input state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateAccountState({ ...createAccountState, [name] : value })
    }

    const handleSubmit = () => {
        console.log("History", userHistory);
        console.log("State", createAccountState);
        userHistory.push(createAccountState)
        localStorage.setItem("users", JSON.stringify(userHistory));
        navigate("/users");
    }

    return (
        <>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-3xl">Accounts</h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="">
                        <select
                            key="role"
                            onChange={handleChange}
                            name="role"
                            id="role"
                            required
                            value={createAccountState["role"]}
                            placeholder="Role"
                        >
                            <option>Role</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                        {fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={createAccountState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )}
                    </div>
                    <Button handleSubmit={handleSubmit} text="Create Account"/>
                </form>
            </div>
        </>
    )
}

export default CreateAccount
