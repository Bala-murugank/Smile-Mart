import React, { useEffect } from "react";
import ViewEmployeeDetails from "./ViewEmployeeDetails";
import EditEmployeeDetails from "./EditEmployeeDetails";
import DeleteEmployeeDetails from "./DeleteEmployeeDetails";
import AddEmployeeDeatils from "./AddEmployeeDeatils";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../Redux/Actions/employeeActions";
import "./employee.css";

const Employee = () => {
  const initialUser = useSelector((state) => state.employee.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center 90vh">
        <h2>List of Employee</h2>
        <div className="addEmployee">
          <AddEmployeeDeatils />
        </div>

        <div
          className="bg-white rounded border shadow p-3"
          style={{ width: "60%" }}
        >
          <Table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {initialUser.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index+1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td className="d-flex gap-4">
                    <>
                      <ViewEmployeeDetails viewEmployee={employee} />
                    </>
                    <>
                      <EditEmployeeDetails editEmployee={employee} />
                    </>
                    <>
                      <DeleteEmployeeDetails deleteUserID={employee.id} />
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
