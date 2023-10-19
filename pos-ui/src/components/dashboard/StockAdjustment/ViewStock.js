import React, { useRef } from "react";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const ViewStock = (props) => {
  const dummyData = [
    {
      id: 1,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
    },
    {
      id: 2,
      Username: "username1",
      Name: "User1",
      Role: "Admin",
      Email: "username@gmail.com",
    },
    {
      id: 3,
      Username: "username2",
      Name: "User2",
      Role: "Admin",
      Email: "username2@gmail.com",
    },
    {
      id: 4,
      Username: "username3",
      Name: "User3",
      Role: "Admin",
      Email: "username3@gmail.com",
    },
    {
      id: 5,
      Username: "username4",
      Name: "User4",
      Role: "Admin",
      Email: "username4@gmail.com",
    },
    {
      id: 6,
      Username: "username5",
      Name: "User5",
      Role: "Admin",
      Email: "username5@gmail.com",
    },
    {
      id: 7,
      Username: "username6",
      Name: "User6",
      Role: "Admin",
      Email: "username6@gmail.com",
    },
  ];

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "SellReport",
    copyStyles: true,
  });
  return (
    <div className="w-full  flex  flex-col  bg-white">
      <div className="w-full px-2 my-2" ref={printRef}>
        <div className="flex items-start ">
          <h1 className="text-xl">Stock Adjustment Details (</h1>
          <h1 className="text-xl font-bold">Reference No:</h1>
          <h1 className="text-xl ">0026 )</h1>
        </div>
        <div className="h-[1px] bg-gray-300 mt-1 w-full"></div>
        <div className="flex items-end justify-end">
          <p className="font-bold">Date:</p>
          <p className="mx-1">08/29/2023</p>
        </div>
        <div className="grid grid-cols-1 mt-4 gap-2 md:grid-cols-3">
          <div className="flex  items-start flex-col ">
            <div className="flex">
              <h1 className="font-bold">Business: </h1>
            </div>
            <div className="flex">
              <h1 className="font-bold">
                EZI POS DEMO Eziline Software House (Pvt.) Ltd{" "}
              </h1>
            </div>
            <div className="flex">
              <h1>PSO pump </h1>
            </div>
            <div className="flex">
              <h1>Rawalpindi,Punjab,Pakistan</h1>
            </div>
            <div className="flex">
              <h1>Mobile: 0515491184</h1>
            </div>
          </div>
          <div className="flex  items-start flex-col ">
            <div className="flex">
              <h1 className="font-bold">Reference NO: </h1>
              <h1 className="mx-1">#0026</h1>
            </div>
            <div className="flex">
              <h1 className="font-bold">Date: </h1>
              <h1 className="mx-1">10/18/2023</h1>
            </div>
            <div className="flex">
              <h1 className="font-bold">Adjustment type: </h1>
              <h1 className="mx-1">Normal</h1>
            </div>
            <div className="flex">
              <h1 className="font-bold">Reason: </h1>
              <h1 className="mx-1">dummyreason</h1>
            </div>
          </div>
        </div>
        <div className="flex  mt-5 ">
          <table className="table-auto w-full  mb-2   px-5 ">
            <thead>
              <tr className="h-[50px] bg-green-500">
                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  #
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  Product Name
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  Lot & Expiry
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  Quantity
                </th>
                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  Unit Price
                </th>

                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}
                  >
                    <td className=" py-1 px-1">{index + 1}</td>
                    <td className=" py-1 px-1">{value.Username}</td>
                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                    <td className="px-1 py-1"> {value.Name}</td>
                    <td className="px-1 py-1">{value.Role}</td>

                    <td className="px-1 py-1"> {value.Name}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr></tr>
            </tfoot>
          </table>
        </div>

        <div className="flex flex-col mt-5 ">
          <h1 className="font-bold text-start">Activities</h1>
          <table
            id="usertbl"
            className="table-fixed w-full mb-10  whitespace-no-wrap "
          >
            <thead>
              <tr>
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Date
                </th>
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Action
                </th>
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  By
                </th>
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}
                  >
                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                    <td className="px-1 py-1"> {value.Name}</td>
                    <td className="px-1 py-1">{value.Role}</td>
                    <td className=" py-1 px-1">{value.Email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-end justify-end mx-4">
        <div
          className="flex bg-green-400 text-white cursor-pointer px-2 py-1"
          onClick={handlePrint}
        >
          <FaPrint size={15} />
          <h1 className="text-sm mx-1">Print</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewStock;
