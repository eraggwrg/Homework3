import { useRef, useState } from "react"

export const AddUser = ({ onAdd, users }) => {
    const [user, setUser] = useState({ id: "", name: "", surname: "", login: "", password: "" })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (e) => {

        e.preventDefault()
        if (!user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
            setSuccess("")
            return setError("Please fill all the fields")
        }

        else if (!user.login.match(/@gmail.com$/)) {
            setSuccess("")
            return setError("Login must be email")
        }

        else if (users.some(x => x.login == user.login)) {
            setSuccess("")
            return setError("Login is already existing")
        }

        else if (user.password.length <= 6) {
            setSuccess("")
            return setError("Password must not be less than 6 symbols")
        }

        else {
            setError("")
            onAdd(user)
            setUser({ id: "", name: "", surname: "", login: "", password: "" })
            setError("")

            setTimeout(() => {
                setSuccess("")
            },3000)
            return setSuccess("Resgistration is successful")

        }



    }

    return <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <label>Name</label>
            <input
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <label>Surname</label>
            <input
                value={user.surname}
                onChange={e => setUser({ ...user, surname: e.target.value })}
            />

            <label>Login</label>
            <input
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}
            />
            <label>Password</label>
            <input
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button>Save</button>
        </form>
    </div>
}