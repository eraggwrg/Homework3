export const UserList = ({ users }) => {
    return <div>
        <h3>User List</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>Password</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(elm => <tr key={elm.id}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.login}</td>
                        <td>{elm.password}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}